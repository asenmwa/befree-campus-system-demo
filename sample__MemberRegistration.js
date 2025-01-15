import React, { useState } from "react";
import { Col, Row, Form, Card, Button, Container } from '@themesberg/react-bootstrap';

import BgImage from "../assets/img/illustrations/signin.svg";

export default () => {
  const [activeCard, setActiveCard] = useState(1);

  const nextCard = () => {
    setActiveCard(activeCard + 1);
  };

  const prevCard = () => {
    setActiveCard(activeCard - 1);
  };

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
        <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>        <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-1200">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">New Member Registration</h3>
                </div>
                <Form className="mt-4">
                  <Card className={activeCard === 1 ? "" : "d-none"}>
                    <Card.Body>
                      <h4 className="mb-4">Personal Member Information</h4>
                      <Row>
                        <Col md={4} className="mb-3">
                          <Form.Group id="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title" />
                          </Form.Group>
                        </Col>
                        <Col md={4} className="mb-3">
                          <Form.Group id="surname">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="text" placeholder="Surname" />
                          </Form.Group>
                        </Col>
                         <Col md={4} className="mb-3">
                          <Form.Group id="names">
                            <Form.Label>Names</Form.Label>
                            <Form.Control type="text" placeholder="Names" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4} className="mb-3">
                          <Form.Group id="dateOfBirth">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" />
                          </Form.Group>
                        </Col>
                         <Col md={4} className="mb-3">
                          <Form.Group id="gender">
                            <Form.Label>Gender</Form.Label>
                            <div>
                              <Form.Check type="radio" label="Male" name="gender" id="gender-male" inline />
                              <Form.Check type="radio" label="Female" name="gender" id="gender-female" inline />
                            </div>
                          </Form.Group>
                        </Col>
                        <Col md={4} className="mb-3">
                          <Form.Group id="idPassportNo">
                            <Form.Label>ID / Passport No.</Form.Label>
                            <Form.Control type="text" placeholder="ID / Passport No." />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4} className="mb-3">
                          <Form.Group id="townCityOfResidence">
                            <Form.Label>Town/City of Residence</Form.Label>
                            <Form.Control type="text" placeholder="Town/City of Residence" />
                          </Form.Group>
                        </Col>
                        <Col md={4} className="mb-3">
                          <Form.Group id="placeOfBirth">
                            <Form.Label>Place of Birth</Form.Label>
                            <Form.Control type="text" placeholder="Place of Birth" />
                          </Form.Group>
                        </Col>
                         <Col md={4} className="mb-3">
                          <Form.Group id="residentialAddress">
                            <Form.Label>Residential Address</Form.Label>
                            <Form.Control type="text" placeholder="Residential Address" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4} className="mb-3">
                          <Form.Group id="contactNumber">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="text" placeholder="Contact Number" />
                          </Form.Group>
                        </Col>
                        <Col md={4} className="mb-3">
                          <Form.Group id="alternativeContactNumber">
                            <Form.Label>Alternative Contact Number</Form.Label>
                            <Form.Control type="text" placeholder="Alternative Contact Number" />
                          </Form.Group>
                        </Col>
                        <Col md={4} className="mb-3">
                          <Form.Group id="emailAddress">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Email Address" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4} className="mb-3">
                          <Form.Group id="maritalStatus">
                            <Form.Label>Marital Status</Form.Label>
                            <Form.Control type="text" placeholder="Marital Status" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={3} className="mb-3">
                          <Form.Group id="twitterHandle">
                            <Form.Label>Twitter</Form.Label>
                            <Form.Control type="text" placeholder="Twitter Handle" />
                          </Form.Group>
                        </Col>
                        <Col md={3} className="mb-3">
                          <Form.Group id="instagramHandle">
                            <Form.Label>Instagram</Form.Label>
                            <Form.Control type="text" placeholder="Instagram Handle" />
                          </Form.Group>
                        </Col>
                        <Col md={3} className="mb-3">
                          <Form.Group id="tiktokHandle">
                            <Form.Label>TikTok</Form.Label>
                            <Form.Control type="text" placeholder="TikTok Handle" />
                          </Form.Group>
                        </Col>
                        <Col md={3} className="mb-3">
                          <Form.Group id="facebookHandle">
                            <Form.Label>Facebook</Form.Label>
                            <Form.Control type="text" placeholder="Facebook Handle" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="availableForSrcBoard">
                            <Form.Label>Are you available to serve on the SRC Board of the #BeFree Youth Campus?</Form.Label>
                            <div>
                              <Form.Check type="radio" label="Yes" name="availableForSrcBoard" id="availableForSrcBoard-yes" inline />
                              <Form.Check type="radio" label="No" name="availableForSrcBoard" id="availableForSrcBoard-no" inline />
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="mt-3">
                        <Button variant="primary" onClick={nextCard}>
                          Next
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className={activeCard === 2 ? "" : "d-none"}>
                    <Card.Body>
                      <h4 className="mb-4">Parent / Guardian Contact Information</h4>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianSurname">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="text" placeholder="Surname" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianNames">
                            <Form.Label>Names</Form.Label>
                            <Form.Control type="text" placeholder="Names" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianDateOfBirth">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianGender">
                            <Form.Label>Gender</Form.Label>
                            <div>
                              <Form.Check type="radio" label="Male" name="parentGuardianGender" id="parentGuardianGender-male" inline />
                              <Form.Check type="radio" label="Female" name="parentGuardianGender" id="parentGuardianGender-female" inline />
                            </div>
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianIdPassportNo">
                            <Form.Label>ID / Passport No.</Form.Label>
                            <Form.Control type="text" placeholder="ID / Passport No." />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianTownCityOfResidence">
                            <Form.Label>Town/City of Residence</Form.Label>
                            <Form.Control type="text" placeholder="Town/City of Residence" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianPlaceOfBirth">
                            <Form.Label>Place of Birth</Form.Label>
                            <Form.Control type="text" placeholder="Place of Birth" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianResidentialAddress">
                            <Form.Label>Residential Address</Form.Label>
                            <Form.Control type="text" placeholder="Residential Address" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianContactNumber">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="text" placeholder="Contact Number" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianAlternativeContactNumber">
                            <Form.Label>Alternative Contact Number</Form.Label>
                            <Form.Control type="text" placeholder="Alternative Contact Number" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianEmailAddress">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Email Address" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianMaritalStatus">
                            <Form.Label>Marital Status</Form.Label>
                            <Form.Control type="text" placeholder="Marital Status" />
                          </Form.Group>
                        </Col>
                        <Col md={12} className="mb-3">
                          <Form.Group id="parentGuardianAvailableForParentBoard">
                            <Form.Label>Are you available to serve as a member on the Parent Board of the #BeFree Youth Campus?</Form.Label>
                            <div>
                              <Form.Check type="radio" label="Yes" name="parentGuardianAvailableForParentBoard" id="parentGuardianAvailableForParentBoard-yes" inline />
                              <Form.Check type="radio" label="No" name="parentGuardianAvailableForParentBoard" id="parentGuardianAvailableForParentBoard-no" inline />
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="parentGuardianSocialGrant">
                            <Form.Label>Does the child, parent and or guardian receive a social grant of any kind? If yes, please specify the name of the grant below:</Form.Label>
                            <Form.Control type="text" placeholder="Social Grant Name" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="mt-3 d-flex justify-content-between">
                        <Button variant="secondary" onClick={prevCard}>
                          Previous
                        </Button>
                        <Button variant="primary" onClick={nextCard}>
                          Next
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className={activeCard === 3 ? "" : "d-none"}>
                    <Card.Body>
                      <h4 className="mb-4">Emergency Contact Information</h4>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="emergencyTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="emergencySurname">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="text" placeholder="Surname" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="emergencyNames">
                            <Form.Label>Names</Form.Label>
                            <Form.Control type="text" placeholder="Names" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="emergencyDateOfBirth">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="emergencyGender">
                            <Form.Label>Gender</Form.Label>
                            <div>
                              <Form.Check type="radio" label="Male" name="emergencyGender" id="emergencyGender-male" inline />
                              <Form.Check type="radio" label="Female" name="emergencyGender" id="emergencyGender-female" inline />
                            </div>
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="emergencyIdPassportNo">
                            <Form.Label>ID / Passport No.</Form.Label>
                            <Form.Control type="text" placeholder="ID / Passport No." />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="emergencyTownCityOfResidence">
                            <Form.Label>Town/City of Residence</Form.Label>
                            <Form.Control type="text" placeholder="Town/City of Residence" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianPlaceOfBirth">
                            <Form.Label>Place of Birth</Form.Label>
                            <Form.Control type="text" placeholder="Place of Birth" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianResidentialAddress">
                            <Form.Label>Residential Address</Form.Label>
                            <Form.Control type="text" placeholder="Residential Address" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianContactNumber">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="text" placeholder="Contact Number" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianAlternativeContactNumber">
                            <Form.Label>Alternative Contact Number</Form.Label>
                            <Form.Control type="text" placeholder="Alternative Contact Number" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianEmailAddress">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Email Address" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="parentGuardianMaritalStatus">
                            <Form.Label>Marital Status</Form.Label>
                            <Form.Control type="text" placeholder="Marital Status" />
                          </Form.Group>
                        </Col>
                        <Col md={12} className="mb-3">
                          <Form.Group id="parentGuardianAvailableForParentBoard">
                            <Form.Label>Are you available to serve as a member on the Parent Board of the #BeFree Youth Campus?</Form.Label>
                            <div>
                              <Form.Check
                                type="radio"
                                label="Yes"
                                name="parentGuardianAvailableForParentBoard"
                                id="parentGuardianAvailableForParentBoard-yes"
                                inline
                              />
                              <Form.Check
                                type="radio"
                                label="No"
                                name="parentGuardianAvailableForParentBoard"
                                id="parentGuardianAvailableForParentBoard-no"
                                inline
                              />
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="parentGuardianSocialGrant">
                            <Form.Label>Does the child, parent and or guardian receive a social grant of any kind? If yes, please specify the name of the grant below:</Form.Label>
                            <Form.Control type="text" placeholder="Social Grant Name" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="mt-3 d-flex justify-content-between">
                        <Button variant="secondary" onClick={prevCard}>
                          Previous
                        </Button>
                        <Button variant="primary" onClick={nextCard}>
                          Next
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className={activeCard === 4 ? "" : "d-none"}>
                    <Card.Body>
                      <h4 className="mb-4">Household Income</h4>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="employed">
                            <Form.Label>Are you employed?</Form.Label>
                            <div>
                              <Form.Check type="radio" label="Yes" name="employed" id="employed-yes" inline />
                              <Form.Check type="radio" label="No" name="employed" id="employed-no" inline />
                            </div>
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="monthlyIncome">
                            <Form.Label>What is the monthly income in the household that the member lives in. Please select one of the following:</Form.Label>
                            <Form.Control as="select">
                              <option>N$0 - N$750</option>
                              <option>N$751 - N$3000</option>
                              <option>N$3001 - N$7000</option>
                              <option>N$7001 - N$15,000</option>
                              <option>N$15,001 -N$25,000</option>
                              <option>N$25,000+</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="mt-3 d-flex justify-content-between">
                        <Button variant="secondary" onClick={prevCard}>
                          Previous
                        </Button>
                        <Button variant="primary" onClick={nextCard}>
                          Next
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className={activeCard === 5 ? "" : "d-none"}>
                    <Card.Body>
                      <h4 className="mb-4">Family Information</h4>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="primaryLanguage">
                            <Form.Label>What is the primary language spoken at home?</Form.Label>
                            <Form.Control type="text" placeholder="Primary Language" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="householdSize">
                            <Form.Label>How many people are currently living in your household, including yourself?</Form.Label>
                            <Form.Control type="number" placeholder="Number of People" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="familyStructure">
                            <Form.Label>Which one of the below family structures best applies to your family?</Form.Label>
                            <div>
                              <Form.Check type="checkbox" label="Nuclear Family (Two parents and children)" id="familyStructure-nuclear" />
                              <Form.Check type="checkbox" label="Blended/Step Family (An adult(s) raising a child(ren) from a previous relationship(s))" id="familyStructure-blended" />
                              <Form.Check type="checkbox" label="Single Parent Family (A parent who lives with child(ren) and no husband, wife, or partner) (Tick where applicable)" id="familyStructure-singleParent" />
                              <Form.Check type="checkbox" label="Mother as a single parent" id="familyStructure-mother" inline />
                              <Form.Check type="checkbox" label="Father as a single parent" id="familyStructure-father" inline />
                              <Form.Check type="checkbox" label="Extended Family (Living with relatives who are not part of the nuclear family)" id="familyStructure-extended" />
                              <Form.Check type="checkbox" label="Foster Family (a child temporarily living with someone that they are not related to)" id="familyStructure-foster" />
                              <Form.Check type="checkbox" label="Grandparents (a child(ren) living with their grandparents or elderly family member)" id="familyStructure-grandparents" />
                              <Form.Check type="checkbox" label="Child Headed Family (a child(ren) living with no parent or adult)" id="familyStructure-childHeaded" />
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="otherFamilyStructure">
                            <Form.Label>Please specify any other family structure that is not listed above</Form.Label>
                            <Form.Control type="text" placeholder="Other Family Structure" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="dependants">
                            <Form.Label>How many children/dependants do you have?</Form.Label>
                            <Form.Control type="number" placeholder="Number of Dependants" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="mealsPerDay">
                            <Form.Label>On average, how many meals a day are prepared in your household?</Form.Label>
                            <Form.Control type="number" placeholder="Meals per Day" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="religion">
                            <Form.Label>What is your religion?</Form.Label>
                            <Form.Control type="text" placeholder="Religion" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="convictedOfCrime">
                            <Form.Label>Have you ever been convicted of a crime?</Form.Label>
                            <div>
                              <Form.Check type="radio" label="Yes" name="convictedOfCrime" id="convictedOfCrime-yes" inline />
                              <Form.Check type="radio" label="No" name="convictedOfCrime" id="convictedOfCrime-no" inline />
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="ongoingCriminalCase">
                            <Form.Label>Do you have an ongoing criminal case, or have you been convicted of a criminal offence?</Form.Label>
                            <div>
                              <Form.Check type="radio" label="Yes" name="ongoingCriminalCase" id="ongoingCriminalCase-yes" inline />
                              <Form.Check type="radio" label="No" name="ongoingCriminalCase" id="ongoingCriminalCase-no" inline />
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="mt-3 d-flex justify-content-between">
                        <Button variant="secondary" onClick={prevCard}>
                          Previous
                        </Button>
                        <Button variant="primary" onClick={nextCard}>
                          Next
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className={activeCard === 6 ? "" : "d-none"}>
                    <Card.Body>
                      <h4 className="mb-4">#BeFree Activities & Services</h4>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="activitiesOfInterest">
                            <Form.Label>Which activities/services would you be interested in at the #BeFree Youth Campus?</Form.Label>
                            <div>
                              <Form.Check type="checkbox" label="#BeFree Cares Clinic (Sexual Health & Awareness Programme - SHAP)" id="activities-caresClinic" />
                              <Form.Check type="checkbox" label="#BreakFree Anti-Violence Centre (Mental Health and Counselling)" id="activities-antiViolence" />
                              <Form.Check type="checkbox" label="The Plug (Robotics, STEM Centre, After School Programming)" id="activities-thePlug" />
                              <Form.Check type="checkbox" label="#BeFree Meals (Soup Kitchen)" id="activities-meals" />
                              <Form.Check type="checkbox" label="Boys and Girls Club" id="activities-boysGirlsClub" />
                              <Form.Check type="checkbox" label="Spiritual Guidance Counseling" id="activities-spiritualGuidance" />
                              <Form.Check type="checkbox" label="Entrepreneurship Training and Development" id="activities-entrepreneurship" />
                              <Form.Check type="checkbox" label="Library (Book Club and Reading)" id="activities-library" />
                              <Form.Check type="checkbox" label="Podcast Radio" id="activities-podcast" />
                              <Form.Check type="checkbox" label="Outdoor Gym (Self Defense, Boxing, Functional Training)" id="activities-outdoorGym" />
                              <Form.Check type="checkbox" label="Volunteering" id="activities-volunteering" />
                              <Form.Check type="checkbox" label="Wi-Fi" id="activities-wifi" />
                              <Form.Check type="checkbox" label="Skills Development (Workshops, Training, Mentorship)" id="activities-skillsDevelopment" />
                              <Form.Check type="checkbox" label="Life Skills Classes" id="activities-lifeSkills" />
                              <Form.Check type="checkbox" label="After School Tutoring" id="activities-afterSchoolTutoring" />
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="otherActivities">
                            <Form.Label>Other than the list mentioned above, what other activities would you like to volunteer for?</Form.Label>
                            <Form.Control type="text" placeholder="Other Activities" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="mt-3 d-flex justify-content-between">
                        <Button variant="secondary" onClick={prevCard}>
                          Previous
                        </Button>
                        <Button variant="primary" onClick={nextCard}>
                          Next
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className={activeCard === 7 ? "" : "d-none"}>
                    <Card.Body>
                      <h4 className="mb-4">Volunteerism / Mentorship</h4>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="volunteerActivities">
                            <Form.Label>We encourage the active participation of the parent(s)/guardian(s) of our members. With prior arrangements, parents are welcome to sit in on the Life Skills classes. Should you be interested in volunteering at the #BeFree Youth Campus, kindly indicate which activity you would like to volunteer for?</Form.Label>
                            <Form.Control type="text" placeholder="Volunteer Activities" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="heardAboutUs">
                            <Form.Label>Where did you hear about the #BeFree Youth Campus?</Form.Label>
                            <div>
                              <Form.Check type="checkbox" label="Social Media (Instagram, Twitter, Facebook, TikTok etc.)" id="heardAboutUs-socialMedia" />
                              <Form.Check type="checkbox" label="Newspaper" id="heardAboutUs-newspaper" />
                              <Form.Check type="checkbox" label="Radio" id="heardAboutUs-radio" />
                              <Form.Check type="checkbox" label="School" id="heardAboutUs-school" />
                              <Form.Check type="checkbox" label="Word of Mouth" id="heardAboutUs-wordOfMouth" />
                              <Form.Check type="checkbox" label="Other" id="heardAboutUs-other" />
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="whyJoin">
                            <Form.Label>Why would you like to join the #BeFree Youth Campus? Motivate your answer in detail, using the full five lines provided.</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Why Join?" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="technologyAccess">
                            <Form.Label>What kind of technology do you have access to? (You can select more than one)</Form.Label>
                            <div>
                              <Form.Check type="checkbox" label="Non-Smartphone" id="technologyAccess-nonSmartphone" />
                              <Form.Check type="checkbox" label="Smartphone" id="technologyAccess-smartphone" />
                              <Form.Check type="checkbox" label="Laptop/Computer" id="technologyAccess-laptop" />
                              <Form.Check type="checkbox" label="Internet Access" id="technologyAccess-internet" />
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="youthOrganization">
                            <Form.Label>Do you belong to a youth organization? If yes, please provide the name and state the year in which you become a member.</Form.Label>
                            <Form.Control type="text" placeholder="Youth Organization" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="mt-3 d-flex justify-content-between">
                        <Button variant="secondary" onClick={prevCard}>
                          Previous
                        </Button>
                        <Button variant="primary" onClick={nextCard}>
                          Next
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className={activeCard === 8 ? "" : "d-none"}>
                    <Card.Body>
                      <h4 className="mb-4">Educational History</h4>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="enrolledInInstitution">
                            <Form.Label>Are you currently enrolled in an educational institution?</Form.Label>
                            <div>
                              <Form.Check type="radio" label="Yes" name="enrolledInInstitution" id="enrolledInInstitution-yes" inline />
                              <Form.Check type="radio" label="No" name="enrolledInInstitution" id="enrolledInInstitution-no" inline />
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="educationalInstitutionName">
                            <Form.Label>Name of your Educational Institution:</Form.Label>
                            <Form.Control type="text" placeholder="Educational Institution Name" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="currentGrade">
                            <Form.Label>Current Grade:</Form.Label>
                            <Form.Control type="text" placeholder="Current Grade" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="currentlyStudying">
                            <Form.Label>What are you currently studying for:</Form.Label>
                            <Form.Control type="text" placeholder="Currently Studying" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="highestEducationLevel">
                            <Form.Label>What is the highest level of education you have completed?</Form.Label>
                            <Form.Control type="text" placeholder="Highest Education Level" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="suspendedExpelled">
                            <Form.Label>Have you ever been suspended/expelled from school?</Form.Label>
                            <div>
                              <Form.Check type="radio" label="Yes" name="suspendedExpelled" id="suspendedExpelled-yes" inline />
                              <Form.Check type="radio" label="No" name="suspendedExpelled" id="suspendedExpelled-no" inline />
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                         <Col md={6} className="mb-3">
                          <Form.Group id="schoolName">
                            <Form.Label>Name of School</Form.Label>
                            <Form.Control type="text" placeholder="School Name" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="suspensionReason">
                            <Form.Label>Reason for Suspension/Expulsion:</Form.Label>
                            <Form.Control type="text" placeholder="Reason for Suspension/Expulsion" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="educationCostPayer">
                            <Form.Label>Who pays the cost of your education?</Form.Label>
                            <div>
                              <Form.Check type="checkbox" label="Parent(s)/Guardian(s)" id="educationCostPayer-parents" />
                              <Form.Check type="checkbox" label="Bursary/Scholarship" id="educationCostPayer-bursary" />
                              <Form.Check type="checkbox" label="Namibia Student Financial Assistance Fund (NSFAF)" id="educationCostPayer-nsfaf" />
                              <Form.Check type="checkbox" label="Student Loan" id="educationCostPayer-studentLoan" />
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="extracurricularActivities">
                            <Form.Label>Do you participate in any extracurricular activities outside of your school? If yes, please indicate</Form.Label>
                            <Form.Control type="text" placeholder="Extracurricular Activities" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="talentsSkills">
                            <Form.Label>Do you have any talents or special skills?</Form.Label>
                            <Form.Control type="text" placeholder="Talents or Special Skills" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="mt-3 d-flex justify-content-between">
                        <Button variant="secondary" onClick={prevCard}>
                          Previous
                        </Button>
                        <Button variant="primary" onClick={nextCard}>
                          Next
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className={activeCard === 9 ? "" : "d-none"}>
                    <Card.Body>
                      <h4 className="mb-4">Medical History</h4>
                       <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="medicalAid">
                            <Form.Label>Do you have medical aid?</Form.Label>
                            <div>
                              <Form.Check type="radio" label="Yes" name="medicalAid" id="medicalAid-yes" inline />
                              <Form.Check type="radio" label="No" name="medicalAid" id="medicalAid-no" inline />
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="medicalPractitionerName">
                            <Form.Label>Name of the Medical Practitioner:</Form.Label>
                            <Form.Control type="text" placeholder="Medical Practitioner Name" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="medicalAidSchemeName">
                            <Form.Label>Medical Aid Scheme Name:</Form.Label>
                            <Form.Control type="text" placeholder="Medical Aid Scheme Name" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group id="medicalAidNumber">
                            <Form.Label>Medical Aid Number:</Form.Label>
                            <Form.Control type="text" placeholder="Medical Aid Number" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group id="principalMember">
                            <Form.Label>Principal Member:</Form.Label>
                            <Form.Control type="text" placeholder="Principal Member" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="psychologicalDistress">
                            <Form.Label>Is or has the member suffered from or received treatment for any psychological/emotional distress?</Form.Label>
                            <div>
                              <Form.Check type="radio" label="Yes" name="psychologicalDistress" id="psychologicalDistress-yes" inline />
                              <Form.Check type="radio" label="No" name="psychologicalDistress" id="psychologicalDistress-no" inline />
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="medicalConditions">
                            <Form.Label>Do you live with any medical conditions or any allergies we should be aware of? Please indicate:</Form.Label>
                            <Form.Control type="text" placeholder="Medical Conditions/Allergies" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="medicationForCondition">
                            <Form.Label>If you answered yes above, are you taking any medication for your medical condition that we should be aware of?</Form.Label>
                            <Form.Control type="text" placeholder="Medication for Condition" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="chronicMedication">
                            <Form.Label>Do you take any chronic medication? If yes, please indicate below:</Form.Label>
                             <Form.Control type="text" placeholder="Chronic Medication" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="learningDisability">
                            <Form.Label>Do you have a learning disability? If yes, please indicate below:</Form.Label>
                            <Form.Control type="text" placeholder="Learning Disability" />
                          </Form.Group>
                        </Col>
                      </Row>
                       <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="sexualHealthServices">
                            <Form.Label>Have you ever received Sexual & Reproductive Health & Rights services at any healthcare center? If yes, please provide the name of the facility below:</Form.Label>
                            <Form.Control type="text" placeholder="Sexual Health Services Facility" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Group id="sgbvSurvivor">
                            <Form.Label>Are you a survivor of Sexual Gender-Based Violence (SGBV)?</Form.Label>
                            <div>
                              <Form.Check type="radio" label="Yes" name="sgbvSurvivor" id="sgbvSurvivor-yes" inline />
                              <Form.Check type="radio" label="No" name="sgbvSurvivor" id="sgbvSurvivor-no" inline />
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="mt-3 d-flex justify-content-between">
                        <Button variant="secondary" onClick={prevCard}>
                          Previous
                        </Button>
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
