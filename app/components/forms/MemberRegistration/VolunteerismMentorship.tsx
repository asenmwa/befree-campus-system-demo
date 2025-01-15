import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Card } from '@themesberg/react-bootstrap';

const VolunteerismMentorship = () => {
  const [volunteerActivities, setVolunteerActivities] = useState('');
    const [heardAboutUs, setHeardAboutUs] = useState({
    socialMedia: false,
    newspaper: false,
    radio: false,
    school: false,
    wordOfMouth: false,
    other: false,
  });
  const [whyJoin, setWhyJoin] = useState('');
    const [technologyAccess, setTechnologyAccess] = useState({
    nonSmartphone: false,
    smartphone: false,
    laptop: false,
    internet: false,
  });
  const [youthOrganization, setYouthOrganization] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('memberData');
    if (storedData && storedData !== 'null' && storedData !== 'undefined') {
      const parsedData = JSON.parse(storedData);
      setVolunteerActivities(parsedData.volunteerActivities || '');
      setHeardAboutUs(parsedData.heardAboutUs || {
        socialMedia: false,
        newspaper: false,
        radio: false,
        school: false,
        wordOfMouth: false,
        other: false,
      });
      setWhyJoin(parsedData.whyJoin || '');
      setTechnologyAccess(parsedData.technologyAccess || {
        nonSmartphone: false,
        smartphone: false,
        laptop: false,
        internet: false,
      });
      setYouthOrganization(parsedData.youthOrganization || '');
    } else {
      setVolunteerActivities('');
      setHeardAboutUs({
        socialMedia: false,
        newspaper: false,
        radio: false,
        school: false,
        wordOfMouth: false,
        other: false,
      });
      setWhyJoin('');
      setTechnologyAccess({
        nonSmartphone: false,
        smartphone: false,
        laptop: false,
        internet: false,
      });
      setYouthOrganization('');
    }
  }, []);

    const handleHeardAboutUsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeardAboutUs({ ...heardAboutUs, [e.target.id.replace('heardAboutUs-', '')]: e.target.checked });
    const storedData = localStorage.getItem('memberData');
    let parsedData = storedData && storedData !== 'null' && storedData !== 'undefined' ? JSON.parse(storedData) : {};
     parsedData = { ...parsedData, heardAboutUs: { ...heardAboutUs, [e.target.id.replace('heardAboutUs-', '')]: e.target.checked } };
    localStorage.setItem('memberData', JSON.stringify(parsedData));
  };

    const handleTechnologyAccessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTechnologyAccess({ ...technologyAccess, [e.target.id.replace('technologyAccess-', '')]: e.target.checked });
    const storedData = localStorage.getItem('memberData');
    let parsedData = storedData && storedData !== 'null' && storedData !== 'undefined' ? JSON.parse(storedData) : {};
    parsedData = { ...parsedData, technologyAccess: { ...technologyAccess, [e.target.id.replace('technologyAccess-', '')]: e.target.checked } };
    localStorage.setItem('memberData', JSON.stringify(parsedData));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'volunteerActivities':
        setVolunteerActivities(value);
        break;
      case 'whyJoin':
        setWhyJoin(value);
        break;
      case 'youthOrganization':
        setYouthOrganization(value);
        break;
      default:
        break;
    }
    const storedData = localStorage.getItem('memberData');
    let parsedData = storedData && storedData !== 'null' && storedData !== 'undefined' ? JSON.parse(storedData) : {};
    parsedData = { ...parsedData, [name]: value };
    localStorage.setItem('memberData', JSON.stringify(parsedData));
  };

  return (
    <Card>
      <Card.Body>
        <h4 className="mb-4">Volunteerism / Mentorship</h4>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="volunteerActivities">
              <Form.Label>We encourage the active participation of the parent(s)/guardian(s) of our members. With prior arrangements, parents are welcome to sit in on the Life Skills classes. Should you be interested in volunteering at the #BeFree Youth Campus, kindly indicate which activity you would like to volunteer for?</Form.Label>
              <Form.Control type="text" placeholder="Volunteer Activities" name="volunteerActivities" value={volunteerActivities} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="heardAboutUs">
              <Form.Label>Where did you hear about the #BeFree Youth Campus?</Form.Label>
              <div>
                <Form.Check type="checkbox" label="Social Media (Instagram, Twitter, Facebook, TikTok etc.)" id="heardAboutUs-socialMedia" checked={heardAboutUs.socialMedia} onChange={handleHeardAboutUsChange} />
                <Form.Check type="checkbox" label="Newspaper" id="heardAboutUs-newspaper" checked={heardAboutUs.newspaper} onChange={handleHeardAboutUsChange} />
                <Form.Check type="checkbox" label="Radio" id="heardAboutUs-radio" checked={heardAboutUs.radio} onChange={handleHeardAboutUsChange} />
                <Form.Check type="checkbox" label="School" id="heardAboutUs-school" checked={heardAboutUs.school} onChange={handleHeardAboutUsChange} />
                <Form.Check type="checkbox" label="Word of Mouth" id="heardAboutUs-wordOfMouth" checked={heardAboutUs.wordOfMouth} onChange={handleHeardAboutUsChange} />
                <Form.Check type="checkbox" label="Other" id="heardAboutUs-other" checked={heardAboutUs.other} onChange={handleHeardAboutUsChange} />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="whyJoin">
              <Form.Label>Why would you like to join the #BeFree Youth Campus? Motivate your answer in detail, using the full five lines provided.</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Why Join?" name="whyJoin" value={whyJoin} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="technologyAccess">
              <Form.Label>What kind of technology do you have access to? (You can select more than one)</Form.Label>
              <div>
                <Form.Check type="checkbox" label="Non-Smartphone" id="technologyAccess-nonSmartphone" checked={technologyAccess.nonSmartphone} onChange={handleTechnologyAccessChange} />
                <Form.Check type="checkbox" label="Smartphone" id="technologyAccess-smartphone" checked={technologyAccess.smartphone} onChange={handleTechnologyAccessChange} />
                <Form.Check type="checkbox" label="Laptop/Computer" id="technologyAccess-laptop" checked={technologyAccess.laptop} onChange={handleTechnologyAccessChange} />
                <Form.Check type="checkbox" label="Internet Access" id="technologyAccess-internet" checked={technologyAccess.internet} onChange={handleTechnologyAccessChange} />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="youthOrganization">
              <Form.Label>Do you belong to a youth organization? If yes, please provide the name and state the year in which you become a member.</Form.Label>
              <Form.Control type="text" placeholder="Youth Organization" name="youthOrganization" value={youthOrganization} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default VolunteerismMentorship;
