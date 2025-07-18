import React from "react";

/**
 * SkipLink component provides accessibility navigation to skip repetitive content
 * and jump directly to the main content area. This is especially helpful for
 * screen reader users and keyboard navigation.
 */
const SkipLink: React.FC = () => {
    const handleSkipToMain = (event: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const mainElement = document.getElementById("main");
        if (mainElement) {
            mainElement.focus();
            mainElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
        if (event.key === "Enter" || event.key === " ") {
            handleSkipToMain(event);
        }
    };

    return (
        <a href="#main" className="skip-link" onClick={handleSkipToMain} onKeyDown={handleKeyDown}>
            Skip to main content
        </a>
    );
};

export default SkipLink;
