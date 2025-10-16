"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import styles from "./VideoModal.module.css";

const VideoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
  };

  // Close modal on escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeVideoModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Video Thumbnail Section */}
      <div
        id="video-section"
        className="container-fluid py-5 mt-5"
        style={{ background: "#FFFFFF" }}
      >
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12">
              <h2 className={styles.heading}>
                Why Fleets Choose <span style={{ color: "#F71735" }}>i</span>
                11Fleet
              </h2>
              <p className={styles.stage_mini}>
                See how <span style={{ color: "#F71735" }}>i</span>11Fleet
                simplifies fleet management - in 90 Seconds
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className={styles.videoThumbnail}>
                <Image
                  src="/images/i11fleet/video-thumbnail.png"
                  alt="i11Fleet Demo Video Thumbnail"
                  width={800}
                  height={450}
                  className={styles.thumbnailImage}
                />

                {/* Play Button Overlay */}
                <div
                  className={styles.playButtonOverlay}
                  onClick={openVideoModal}
                >
                  <div className={styles.playButton}>
                    <Play className={styles.playIcon} />
                  </div>
                </div>

                {/* Watch Demo Button */}
                <div className={styles.watchDemoButtonContainer}>
                  <button
                    className={styles.watchDemoButton}
                    onClick={openVideoModal}
                  >
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className={styles.videoModal} onClick={closeVideoModal}>
          <div
            className={styles.modalVideoContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalCloseButton}
              onClick={closeVideoModal}
              aria-label="Close video"
            >
              ×
            </button>
            <video
              src="/images/i11fleet/I11fleetVideo.mp4"
              controls
              autoPlay
              className={styles.videoElement}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
