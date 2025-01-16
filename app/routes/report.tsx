import type { MetaFunction } from "@remix-run/node";
import Navigation from '../components/layout/Navigation';
import Header from '../components/layout/Header';
import MentalHealthTable from "~/components/Dashboard/MentalHealthTable";

export const meta: MetaFunction = () => {
  return [
    { title: "#BeFree Dashboard" },
    { name: "description", content: "BeFree Youth Health Services Analytics Dashboard" },
  ];
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
            <Header />
            <Navigation />
      <MentalHealthTable />
    </div>
  );
}
