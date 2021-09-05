import React from "react";
import Icon1 from "../images/padlock-1.png";
import  Icon2 from "../images/data-protection-1.png";
import Icon3 from "../images/approved-1.png";
import Iso1 from "../images/iso_1.png";
import Iso2 from "../images/iso_2.png";
import Iso3 from "../images/iso_3.png";
import Iso4 from "../images/iso_4.png";
import Iso5 from "../images/iso_5.png";
import Iso6 from "../images/iso_6.png";
import Iso7 from "../images/iso_7.png";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import pic4 from "../images/pic4.png";

function Security() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h1 className="main-heading">Security features for more control, visibility<br/> and flexibilty</h1>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={Icon1} className="w-40 h-40" alt="..." />
                            <p className="icon-p pb-4"> Identity and device management Ensure that only the right people and approved devices can access your 
                                company’s information in Slack with features like single sign-on, domain claiming and support for 
                                enterprise mobility management.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={Icon2} className="w-40 h-40" alt="..." />
                            <p className="icon-p pb-4"> Data protection By default, Slack encrypts data at rest and data in transit for all of our customers. 
                                We further protect your data with tools like Slack Enterprise Key Management (Slack EKM), audit logs,
                                and integrations with top data loss prevention (DLP) providers.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={Icon3} className="w-40 h-40" alt="..." />
                            <p className="icon-p pb-4"> Information governance Slack offers governance and risk-management capabilities flexible enough to meet
                                your organization’s needs, no matter what they are. ith features like single sign-on, domain claiming 
                                and support for enterprise mobility management.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3>The security program at Zuri protects our <br/>organization and your data at every layer</h3>
                            <br/>
                            <p className="text-center">Compliance certifications and attestations</p>
                            <div className="d-flex flex-row">
                                <div className="p-3 bd_highlight">
                                    <img src={Iso1} className="justify-content-start h-20 w-20" alt=""/>
                                    <div className="content">
                                        <h6>IS/IEC 27001</h6>
                                        <p>Information Security Management System (ISMS)</p>
                                    </div>
                                </div>
                                <div className="p-3 bd_highlight">
                                    <img src={Iso2} className="justify-content-start h-20 w-20" alt=""/>
                                    <div className="content">
                                        <h6>IS/IEC 27001</h6>
                                        <p>Information Security Management System (ISMS)</p>
                                    </div>
                                </div>  
                                <div className="p-3 bd_highlight">
                                    <img src={Iso3} className="justify-content-start h-20 w-20" alt=""/>
                                    <div className="content">
                                        <h6>IS/IEC 27001</h6>
                                        <p>Information Security Management System (ISMS)</p>
                                    </div>
                                </div>
                                <div className="p-3 bd_highlight">
                                    <img src={Iso4} className="justify-content-start h-20 w-20" alt=""/>
                                    <div className="content">
                                        <h6>IS/IEC 27001</h6>
                                        <p>Information Security Management System (ISMS)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row">
                                <div className="p-3 bd_highlight">
                                    <img src={Iso5} className="justify-content-start h-20 w-20" alt=""/>
                                    <div className="content">
                                        <h6>IS/IEC 27001</h6>
                                        <p>Information Security Management System (ISMS)</p>
                                    </div>
                                </div>
                                <div className="p-3 bd_highlight">
                                    <img src={Iso5} className="justify-content-start h-20 w-20" alt=""/>
                                    <div className="content">
                                        <h6>IS/IEC 27001</h6>
                                        <p>Information Security Management System (ISMS)</p>
                                    </div>
                                </div>
                                <div className="p-3 bd_highlight">
                                    <img src={Iso6} className="justify-content-start h-20 w-20" alt=""/>
                                    <div className="content">
                                        <h6>IS/IEC 27001</h6>
                                        <p>Information Security Management System (ISMS)</p>
                                    </div>
                                </div>
                                <div className="p-3 bd_highlight">
                                    <img src={Iso6} className="justify-content-start h-20 w-20" alt=""/>
                                    <div className="content">
                                        <h6>IS/IEC 27001</h6>
                                        <p>Information Security Management System (ISMS)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row">
                                <div className="p-3 bd_highlight">
                                    <img src={Iso7} className="justify-content-start h-20 w-20" alt=""/>
                                    <div className="content">
                                        <h6>IS/IEC 27001</h6>
                                        <p>Information Security Management System (ISMS)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3>Meet specific industry regulations and international security and <br/>data privacy standards</h3>
                        </div>
                        <div className="col-md-6">
                            <img src={pic1} className="h-20 w-20" alt="..."/>
                            <h5>Health Insurance Portability and Accountability Act (HIPAA)</h5>
                            <p>Slack can be configured for HIPAA Compliance, including electronically protected health information (e-PHI).</p>
                        </div> 
                        <div className="col-md-6">
                            <img src={pic2} className="h-20 w-20" alt="..."/>
                            <h5>Health Insurance Portability and Accountability Act (HIPAA)</h5>
                            <p>Slack can be configured for HIPAA Compliance, including electronically protected health information (e-PHI).</p>
                        </div> 
                        <div className="col-md-6">
                            <img src={pic3} className="h-20 w-20" alt="..."/>
                            <h5>Health Insurance Portability and Accountability Act (HIPAA)</h5>
                            <p>Slack can be configured for HIPAA Compliance, including electronically protected health information (e-PHI).</p>
                        </div> 
                        <div className="col-md-6">
                            <img src={pic4} className="h-20 w-20" alt="..."/>
                            <h5>Health Insurance Portability and Accountability Act (HIPAA)</h5>
                            <p>Slack can be configured for HIPAA Compliance, including electronically protected health information (e-PHI).</p>
                        </div> 
                    </div>
                </div>
            </section>
        </div>
    )
    
}

export default Security;