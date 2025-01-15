import Database from 'better-sqlite3';
import path from 'path';

let db: Database.Database;

declare global {
  var __db: Database.Database | undefined;
}

// This ensures we don't create multiple connections in development
if (process.env.NODE_ENV === 'production') {
  db = new Database(path.join(process.cwd(), 'data.db'));
  db.pragma('journal_mode = WAL');
} else {
  if (!global.__db) {
    global.__db = new Database(path.join(process.cwd(), 'data.db'));
    global.__db.pragma('journal_mode = WAL');
  }
  db = global.__db;
}

// Initialize database schema
const initializeDb = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS members (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      rfid TEXT UNIQUE,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      dateOfBirth TEXT NOT NULL,
      gender TEXT,
      email TEXT,
      phone TEXT,
      address TEXT,
      city TEXT,
      state TEXT,
      zipCode TEXT,
      emergencyContactName TEXT,
      emergencyContactPhone TEXT,
      emergencyContactRelation TEXT,
      parentGuardianName TEXT,
      parentGuardianPhone TEXT,
      parentGuardianEmail TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      memberId INTEGER NOT NULL,
      checkInTime DATETIME NOT NULL,
      checkOutTime DATETIME,
      FOREIGN KEY (memberId) REFERENCES members(id)
    );
  `);
};

// Initialize the database
initializeDb();

export { db };

// Helper functions for member operations
export const createMember = (memberData: any) => {
  const stmt = db.prepare(`
    INSERT INTO members (
      rfid, firstName, lastName, dateOfBirth, gender, email, phone,
      address, city, state, zipCode, emergencyContactName,
      emergencyContactPhone, emergencyContactRelation,
      parentGuardianName, parentGuardianPhone, parentGuardianEmail
    ) VALUES (
      @rfid, @firstName, @lastName, @dateOfBirth, @gender, @email, @phone,
      @address, @city, @state, @zipCode, @emergencyContactName,
      @emergencyContactPhone, @emergencyContactRelation,
      @parentGuardianName, @parentGuardianPhone, @parentGuardianEmail
    )
  `);
  
  return stmt.run(memberData);
};

export const getMemberByRfid = (rfid: string) => {
  const stmt = db.prepare('SELECT * FROM members WHERE rfid = ?');
  return stmt.get(rfid);
};

export const checkInMember = (memberId: number) => {
  const stmt = db.prepare(`
    INSERT INTO attendance (memberId, checkInTime)
    VALUES (?, CURRENT_TIMESTAMP)
  `);
  return stmt.run(memberId);
};

export const checkOutMember = (memberId: number) => {
  const stmt = db.prepare(`
    UPDATE attendance 
    SET checkOutTime = CURRENT_TIMESTAMP
    WHERE memberId = ? AND checkOutTime IS NULL
  `);
  return stmt.run(memberId);
};

export const getMemberAttendance = (memberId: number) => {
  const stmt = db.prepare(`
    SELECT * FROM attendance 
    WHERE memberId = ? AND checkOutTime IS NULL
    ORDER BY checkInTime DESC LIMIT 1
  `);
  return stmt.get(memberId);
};
