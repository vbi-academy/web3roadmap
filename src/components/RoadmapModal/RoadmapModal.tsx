import React, { useEffect, useState } from "react";
import { useModalStore } from "@stores/modalStore";
import arrowLeft from "@assets/icons/arrow-uturn-left-icon.svg";
import { httpGet } from "src/lib/http";
import "./markdown-styles.css";
import processCustomTags from "./processCustomTags";

const RoadmapModal: React.FC = () => {
  const { isOpen, roadmapId, topicId, closeModal } = useModalStore();
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const fetchRoadmapDetail = async () => {
      if (!isOpen || !roadmapId || !topicId) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await httpGet(
          `/${roadmapId}/${topicId}`,
          {},
          {
            headers: {
              Accept: "text/html",
            },
          }
        );

        if (response.error) {
          throw new Error(response.error as any);
        }
        const processedHtml = processCustomTags(response.response as any);
        setHtmlContent(processedHtml);
      } catch (error) {
        setError("Error loading content. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRoadmapDetail();
  }, [isOpen, roadmapId, topicId]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-gray-950 bg-opacity-90 text-white overflow-auto transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
          <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto space-y-4 py-20">
            <button
              className="flex items-center gap-2 cursor-pointer transition-all hover:-translate-x-1 active:-translate-x-1"
              onClick={closeModal}
            >
              <img src={arrowLeft.src} alt="Back" className="w-6 h-6" />
              Back
            </button>
            {/* {isLoading && <LoadingIcon />} */}
            {error && <p className="text-red-500">{error}</p>}
            {!isLoading && !error && (
              <div
                className="content-area markdown-content"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapModal;
