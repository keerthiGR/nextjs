import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import {
  Brain,
  MapPin,
  Settings,
  MessageCircle,
  CloudSun,
  Camera,
  Mic,
  FileText,
  Shield,
  Languages,
  Monitor,
  Smartphone,
  Users,
  Target,
  Zap,
  Rocket,
  X,
} from "lucide-react";

import heroBg from "../../public/images/i11fleet/i11fleet-banner.jpg";
import grid1 from "../../public/images/i11fleet/grid1.jpg";
import grid2 from "../../public/images/i11fleet/grid2.jpg";
import grid3 from "../../public/images/i11fleet/grid3.jpg";
import grid4 from "../../public/images/i11fleet/grid4.jpg";
import grid5 from "../../public/images/i11fleet/grid5.jpg";
import grid6 from "../../public/images/i11fleet/grid6.jpg";
import grid7 from "../../public/images/i11fleet/grid7.jpg";
import grid8 from "../../public/images/i11fleet/grid8.jpg";
import grid9 from "../../public/images/i11fleet/grid9.jpg";
import card1 from "../../public/images/i11fleet/card1.jpg";
import card2 from "../../public/images/i11fleet/card2.jpg";
import card3 from "../../public/images/i11fleet/card3.jpg";
import edgeBg from "../../public/images/i11fleet/Edge-bg.png";
import edgeImage from "../../public/images/i11fleet/edge.jpg";
import VideoModal from "../../components/Video/i11fleetVideoModal.js";

export const metadata = {
  title: "i11Fleet - i11 Fleet Management Solutions by i11Labs",
  description:
    "Transform your fleet with intelligent automation, real-time insights, and seamless communication. Built to work, built to last with i11Fleet.",
  ogTitle: "i11Fleet - i11 Fleet Management Solutions by i11Labs",
  url: "https://i11labs.com/i11fleet",
  ogDescription:
    "Transform your fleet with intelligent automation, real-time insights, and seamless communication with i11Fleet.",
  ogUrl: "https://i11labs.com/i11fleet",
  ogType: "website",
  ogLocale: "en_US",
};

export default function i11fleet() {
  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid ">
        <div className="row">
          <div className="col p-0">
            <div className={styles.heroSection}>
              <div className={styles.heroContent}>
                <h2 className={styles.heroTitle}>
                  Built to work. Built to last.
                </h2>
                <h2 className={styles.heroTitle}>
                  Designed for fleets that never
                </h2>
                <h2 className={styles.heroTitle}>slow down!</h2>
                <p className={styles.heroSubtitle}>
                  Transform your fleet with intelligent automation, real-time
                  insights, and seamless communication - all in one powerful
                  platform.
                </p>
                <div className={styles.heroButtons}>
                  <Link href="#video-section" className={styles.heroBtn}>
                    Watch Demo
                  </Link>
                  <Link href="/contact" className={styles.heroBtn}>
                    Request A Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Video */}
      <div
        className="container-fluid pt-5 mt-5"
        style={{ background: "#FFFFFF" }}
      >
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12">
              <h2 className={styles.heading}>
                Why Fleets Choose <span style={{ color: "#F71735" }}>i</span>
                11Fleet (Watch Demo Below)
              </h2>
            </div>
          </div>

          <div
            className="row justify-content-center"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "8px",
              marginBottom: "4rem",
              transform: "translateZ(0)", // Add this
              backfaceVisibility: "hidden", // Add this
            }}
          >
            <div className="col-12 col-md-10 col-lg-8 d-flex justify-content-center">
              <video
                src="/images/i11fleet/I11fleetVideo.mp4"
                controls
                autoPlay
                loop
                muted
                style={{
                  display: "block",
                  width: "100%",
                  maxWidth: "800px",
                  borderRadius: "8px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#ffffff",
                  transform: "translateZ(0)",
                  WebkitTransform: "translateZ(0)",
                  MozTransform: "translateZ(0)",
                  // Optional: Add one of these if needed
                  border: "1px solid #ffffff", // Solution 2
                  // OR
                  // boxShadow: "0 0 0 1px #ffffff", // Alternative to border
                }}
                className="videoElement" // Add this class for CSS targeting
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Section - Using the separate component */}
      {/* <VideoModal /> */}

      {/* Why We Built Section */}
      <div className={styles.whyWeBuiltSection}>
        <div className={styles.whyWeBuiltContainer}>
          {/* Title */}
          <h2 className={styles.whyWeBuiltTitle}>
            Why We Built <span className={styles.redText}>i</span>11Fleet?
          </h2>
          <p className={styles.whyWeBuiltSubtitle}>
            Because drivers deserve tools, not troubles
          </p>

          {/* Flex layout instead of grid */}
          <div className={styles.whyWeBuiltContent}>
            {/* Pain Points */}
            <div className={styles.painPointsColumn}>
              <h3 className={styles.painPointsHeading}>
                <span className={styles.redAccent}>|</span>
                <span className={styles.headingText}> Pain Points</span>
              </h3>
              <div className={styles.painPointsGrid}>
                <div className={styles.painPointRowRight}>
                  <div className={styles.painPointItem}>
                    <X className={styles.painIcon} />
                    <span className={styles.singleLineText}>
                      Clunky old TMS software
                    </span>
                  </div>
                </div>

                <div className={styles.painPointRowCenter}>
                  <div className={styles.painPointItem}>
                    <X className={styles.painIcon} />
                    <span className={styles.singleLineText}>
                      Hidden fees &amp; lock-in contracts
                    </span>
                  </div>
                </div>

                <div className={styles.painPointRowLeftDouble}>
                  <div className={styles.painPointItem}>
                    <X className={styles.painIcon} />
                    <span className={styles.singleLineText}>
                      One size fit all-Rigid system
                    </span>
                  </div>
                  <div className={styles.painPointItem}>
                    <X className={styles.painIcon} />
                    <span className={styles.singleLineText}>
                      Drivers stuck with complex apps
                    </span>
                  </div>
                </div>

                <div className={styles.painPointRowCenter}>
                  <div className={styles.painPointItem}>
                    <X className={styles.painIcon} />
                    <span className={styles.singleLineText}>Typing forms</span>
                  </div>
                </div>

                <div className={styles.painPointRowRight}>
                  <div className={styles.painPointItem}>
                    <X className={styles.painIcon} />
                    <span className={styles.singleLineText}>
                      Weather delays
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider line with circle */}
            <div className={styles.centerCircleContainer}>
              <div className={styles.circleBorder1}>
                <div className={styles.circleBorder2}>
                  <div className={styles.circleBorder3}>
                    <div className={styles.centerIconCircle}>
                      <MessageCircle className={styles.centerMessageIcon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className={styles.solutionsColumn}>
              <h3 className={styles.solutionsHeading}>
                <span className={styles.greenAccent}>|</span>
                <span className={styles.headingText}> Our Solutions</span>
              </h3>
              <div className={styles.solutionsGrid}>
                <div className={styles.solutionRowLeft}>
                  <div className={styles.solutionItem}>
                    <Zap className={styles.solutionIcon} />
                    <span className={styles.singleLineText}>
                      Simple, modern, mobile-first
                    </span>
                  </div>
                </div>

                <div className={styles.solutionRowCenter}>
                  <div className={styles.solutionItem}>
                    <Shield className={styles.solutionIcon} />
                    <span className={styles.singleLineText}>
                      Transparent pricing
                    </span>
                  </div>
                </div>

                <div className={styles.solutionRowRightDouble}>
                  <div className={styles.solutionItem}>
                    <Settings className={styles.solutionIcon} />
                    <span className={styles.singleLineText}>
                      Completely customizable
                    </span>
                  </div>
                  <div className={styles.solutionItem}>
                    <Brain className={styles.solutionIcon} />
                    <span className={styles.singleLineText}>
                      Empowered with AI Features
                    </span>
                  </div>
                </div>

                <div className={styles.solutionRowCenter}>
                  <div className={styles.solutionItem}>
                    <Zap className={styles.solutionIcon} />
                    <span className={styles.singleLineText}>Voice-to-text</span>
                  </div>
                </div>

                <div className={styles.solutionRowLeft}>
                  <div className={styles.solutionItem}>
                    <Zap className={styles.solutionIcon} />
                    <span className={styles.singleLineText}>
                      AI weather alerts
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div
        className="container-fluid pt-5 mt-5"
        style={{ background: "#FFFFFF" }}
      >
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12">
              <h2 className={styles.heading}>
                <span className={styles.redAccent}>|</span> Everything Under One
                Roof
              </h2>
              <p className={styles.stage_mini}>
                No clutter you don't need. No features you'll never use.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            {[
              {
                icon: Settings,
                title: "Fully Customizable Software",
                desc: "Track through the mobile and web app at both ticket and work order level.",
                image: grid1,
              },
              {
                icon: MapPin,
                title: "Real-Time Truck Tracking",
                desc: "Track through the mobile and web app at both ticket and work order level.",
                image: grid2,
              },
              {
                icon: MessageCircle,
                title: "In-App Messaging & Calling",
                desc: "Seamless communication between dispatchers and drivers.",
                image: grid3,
              },
              {
                icon: CloudSun,
                title: "Weather AI Insights",
                desc: "Get early alerts on weather conditions that may impact deliveries.",
                image: grid4,
              },
              {
                icon: Camera,
                title: "AI Auto-Image (Snap → Done)",
                desc: "Snap a photo of any ticket—handwritten, printed, or carbon copy—and i11Fleet instantly logs the details into the right fields.",
                image: grid5,
              },
              {
                icon: Mic,
                title: "AI Voice-to-Text",
                desc: "Fill forms and generate work orders simply by speaking. Our tool understands context, extracts the right details, and puts them exactly where they belong.",
                image: grid6,
              },
              {
                icon: FileText,
                title: "Billing & Invoicing",
                desc: "Streamlined financials, right inside the platform.",
                image: grid7,
              },
              {
                icon: Shield,
                title: "Secure Cloud",
                desc: "Enterprise-grade security for peace of mind.",
                image: grid8,
              },
              {
                icon: Languages,
                title: "Bilingual Support",
                desc: "Built for diverse teams, available in multiple languages.",
                image: grid9,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center"
              >
                <div className={styles.featureCard}>
                  <div className={styles.featureImage}>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={300}
                      height={200}
                      className={styles.featureImg}
                    />
                  </div>

                  {/* ICON */}
                  <div className={styles.iconCircle}>
                    <div className={styles.featureIcon}>
                      <feature.icon className={styles.featureSvg} />
                    </div>
                  </div>

                  <div className={styles.iconSquare}></div>

                  <div className={styles.featureContent}>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDesc}>{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Section */}
      <div className="container pt-5 mt-5 mb-5">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12">
            <h2 className={styles.heading}>
              <span className={styles.redAccent}>|</span> One platform, Three
              winners
            </h2>
            <p className={styles.stage_mini}>
              Because when Admins, Drivers, and Clients all win → the business
              wins.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          {[
            {
              icon: Monitor,
              title: "Admins",
              subtitle: "(The command center)",
              desc: "Complete fleet oversight with real-time dashboards, automated reporting, and intelligent alerts. Streamline operations, reduce costs, and make data-driven decisions that keep your business moving forward.",
              color: "#3B82F6",
              image: card1,
              circleColor: "#3B82F6",
            },
            {
              icon: Smartphone,
              title: "Drivers",
              subtitle: "(The front line)",
              desc: "Intuitive mobile app that simplifies daily tasks. Easy route navigation, instant communication, digital paperwork, and performance tracking. Empowering drivers to focus on what they do best - driving safely and efficiently.",
              color: "#22C55E",
              image: card2,
              circleColor: "#22C55E",
            },
            {
              icon: Users,
              title: "End Clients",
              subtitle: "(Customers)",
              desc: "Real-time shipment tracking, delivery notifications, and transparent communication. Your clients stay informed every step of the way, building trust and satisfaction that drives repeat business.",
              color: "#A855F7",
              image: card3,
              circleColor: "#A855F7",
            },
          ].map((role, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4 mb-4 position-relative"
            >
              {/* Small circle above the card */}
              <div
                className={styles.platformCircle}
                style={{ backgroundColor: role.circleColor }}
              ></div>

              <div className={styles.red1Circle}></div>

              <div className={styles.red2Circle}></div>

              <div className={styles.roleCard}>
                <div
                  className={styles.roleIcon}
                  style={{ backgroundColor: role.color }}
                >
                  <role.icon className={styles.roleSvg} />
                </div>
                <h3 className={styles.roleTitle}>{role.title}</h3>
                <h4 className={styles.roleSubtitle}>{role.subtitle}</h4>
                <p className={styles.roleDesc}>{role.desc}</p>
                <div
                  className={styles.roleDivider}
                  style={{ backgroundColor: role.color }}
                ></div>
                <div className={styles.roleImage}>
                  <Image
                    src={role.image}
                    alt={role.title}
                    width={280}
                    height={120}
                    className={styles.roleImg}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edge Section */}
      <div className={styles.edgeSection}>
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <h2 className={styles.edgeTitle}>
                The <span className={styles.redText}>i</span>11Labs Edge
              </h2>
              <p className={styles.edgeSubtitle}>
                Execution Monsters, by Design.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <p className={styles.edgeDescription}>
                We don't just build software – we architect solutions that
                transform how fleets operate. Our team combines deep industry
                expertise with cutting-edge technology to deliver platforms that
                don't just meet expectations, they exceed them.
                <br />
                <br />
                Every line of code is written with purpose. Every feature is
                designed with intention. Every update is deployed with
                precision. Because when your fleet depends on technology, that
                technology better be bulletproof.
                <br />
                <br />
                We're not just another software company. We're your strategic
                partner in fleet excellence.
              </p>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-12 col-lg-7">
              <div className={styles.edgeImageContainer}>
                <Image
                  src={edgeImage}
                  alt="i11Labs Edge"
                  width={800}
                  height={300}
                  className={styles.edgeMainImage}
                />
                <div className={styles.edgeFeaturesOverlay}>
                  <div className={styles.edgeFeature}>
                    <div className={styles.edgeFeatureIcon}>
                      <Target className={styles.edgeFeatureSvg} />
                    </div>
                    <span>Precision</span>
                  </div>
                  <div className={styles.edgeFeature}>
                    <div className={styles.edge1FeatureIcon}>
                      <Zap className={styles.edge1FeatureSvg} />
                    </div>
                    <span>Performance</span>
                  </div>
                  <div className={styles.edgeFeature}>
                    <div className={styles.edgeFeatureIcon}>
                      <Rocket className={styles.edgeFeatureSvg} />
                    </div>
                    <span>Innovation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
