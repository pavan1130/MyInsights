import React, { useState } from "react";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { IoIosMore } from "react-icons/io";
import "../Styles/MyAccounts.css";

// Reusable InfoBox component
const InfoBox = ({ title, value, description, iconClass }) => (
  <div className="info-box">
    <h4>{title}</h4>
    {value && <p className="highlight">{value}</p>}
    {iconClass && <div className={`icon ${iconClass}`}></div>}
    {description && <p>{description}</p>}
  </div>
);

const MyAccounts = () => {
  const data = {
    recentObjections: [
      {
        icon: "⚠️",
        description: "Payer hurdles / Reimbursement complexity",
        date: "March 25th, 2024",
        author: "Lisa Smith",
      },
      {
        icon: "⚠️",
        description: "Lack of Q4W indication",
        date: "February 12th, 2024",
        author: "Lisa Smith",
      },
    ],
    recentContent: [
      {
        description: 'Marketing eMail - Clicked "RWE Patient Case"',
        date: "March 25th, 2024",
      },
      {
        description: 'CLM Presentation EYLEA HD Slide "RWE Patient Case"',
        date: "February 12th, 2024",
      },
    ],
    veevaInsightTriggers: [
      {
        description:
          "(MS/DEMS) Dr. Robinson has contributed most to the increase in Medicare Part-B share",
        date: "Feb 20th, 2024",
        actions: ["No Action", "|", "Actionable"],
      },
      {
        description:
          '(MS/DEMS) Dr. Robinson is part of "HD RWE" Campaign and has engaged in preceding Marketing email tactic. Please consider following up with RWE-messaging / content available to you.',
        date: "Feb 12th, 2024",
        actions: [],
      },
    ],
  };

  return (
    <div className="hcp-insights">
      <div className="header">
        <div className="title">
          <a className="back-link">
            <RiArrowLeftWideFill href="#" className="back-icon" /> My Accounts
          </a>
        </div>
        <span className="account-name">Robinson, Melissa</span>
        <div className="moreicon">
          <IoIosMore />
        </div>
      </div>
      <div className="hcp-insights-header">
        <span className="hcp-insights-title">HCP Insights</span>
      </div>

      <div className="content">
        <div className="primary-hcp">
          <h4>Primary HCO:</h4>
          <p className="underline">Mid Atlantic Retina</p>
          <p>8 Ronaldo Terr, Cherry Hill, NJ</p>
          <p>Phone: 123 345 456</p>
          <p>Email: testaccount@gmail.com</p>
        </div>
        <div className="info-grid">
          <InfoBox
            title="HCP Samples QTD"
            value="5 +3"
            description="HCP Samples vs PQTD"
          />
          <InfoBox
            title="Affiliated to"
            value="5"
            description="Office locations"
          />
          <InfoBox
            title="Attitude Persona"
            iconClass="fighter-pilot"
            description="Fighter Pilot"
          />
          <InfoBox
            title="Adoption Stage"
            iconClass="parity-usage"
            description="At Parity Usage"
          />
          <InfoBox
            title="KOL Classification"
            iconClass="local-kol"
            description="Local KOL"
          />
          <InfoBox title="Affinity eMail" value="High" />
          <InfoBox
            title="RS Disposition"
            description="Treating existing patients. Patient compliance 1st priority"
          />
          <InfoBox
            title="Claims Data"
            iconClass="claims-data"
            description="Conf. Tier 3"
          />
        </div>
      </div>
      <div className="lineContainer">
        <div className="line1"></div>
        {/* here toggle function */}
        <div className="line2"></div>
      </div>
      <div className="dashboard">
        <div className="left-column">
          <div className="section recent-objections">
            <h2>Most Recent Objections</h2>
            <div className="objections-box">
              {data.recentObjections.map((objection, index) => (
                <div className="itemobjection" key={index}>
                  <div className="card-header">
                    <div className="icon3">{objection.icon}</div>
                    <div className="description">{objection.description}</div>
                    <div className="date">{objection.date}</div>
                  </div>
                  <div className="author">{objection.author}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="section recent-content">
            <h2>Most Recent Content / Campaigns Engaged</h2>
            <div className="content-box">
              {data.recentContent.map((content, index) => (
                <div className="itemcontent" key={index}>
                  <div className="card-header">
                    <div className="description">{content.description}</div>
                    <div className="date">{content.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right-column section veeva-insight-triggers">
          <h2>Veeva Insight Triggers</h2>
          <div className="triggers-box">
            {data.veevaInsightTriggers.map((trigger, index) => (
              <div className="itemtrigger" key={index}>
                <div className="card-header">
                  <div className="description3">{trigger.description}</div>
                  <div className="date3">{trigger.date}</div>
                </div>
                <div className="actions">
                  {trigger.actions.map((action, i) => (
                    <span key={i}>{action}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="dashboard">
        <div className="left-column">
          <div className="section recent-objections">
            <h2>Most Recent Objections</h2>
            <div className="objections-box">
              {data.recentObjections.map((objection, index) => (
                <div className="itemobjection" key={index}>
                  <div className="card-header">
                    <div className="icon3">{objection.icon}</div>
                    <div className="description">{objection.description}</div>
                    <div className="date">{objection.date}</div>
                  </div>
                  <div className="author">{objection.author}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="section recent-content">
            <h2>Most Recent Content / Campaigns Engaged</h2>
            <div className="content-box">
              {data.recentContent.map((content, index) => (
                <div className="itemcontent" key={index}>
                  <div className="card-header">
                    <div className="description">{content.description}</div>
                    <div className="date">{content.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right-column section veeva-insight-triggers">
          <h2>Veeva Insight Triggers</h2>
          <div className="triggers-box">
            {data.veevaInsightTriggers.map((trigger, index) => (
              <div className="itemtrigger" key={index}>
                <div className="card-header">
                  <div className="description3">{trigger.description}</div>
                  <div className="date3">{trigger.date}</div>
                </div>
                <div className="actions">
                  {trigger.actions.map((action, i) => (
                    <span key={i}>{action}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccounts;
