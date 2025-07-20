import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Paths from "routing";

import { LogoFactory } from "components";
import { useDebouncedCallback } from "hooks";

export const LandingPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleClick = useDebouncedCallback<HTMLDivElement>(navigate, Paths.search);

    return (
        <>
            <LogoFactory />
            <div className="starwars-frame" onClick={handleClick}>
                <div className="starwars-title">
                    {t("landingPage.title")}
                    <sub>{t("landingPage.subtitle")}</sub>
                </div>
                <div id="titles">
                    <div id="titlecontent">
                        <header>
                            <p className="center">{t("landingPage.greeting")}</p>
                            <p>{t("landingPage.intro.description")}</p>

                            <p>{t("landingPage.intro.disclaimer")}</p>

                            <p>{t("landingPage.intro.responsibility")}</p>

                            <p>{t("landingPage.intro.presentation")}</p>

                            <p>{t("landingPage.intro.contentWarning")}</p>

                            <p>{t("landingPage.intro.searchTip")}</p>

                            <p>{t("landingPage.intro.versionNote")}</p>

                            <p>{t("landingPage.intro.tagsWarning")}</p>
                            <p>{t("landingPage.intro.authorTip")}</p>
                            <p className="center">{t("landingPage.intro.conclusion")}</p>

                            <p className="center">{t("landingPage.intro.farewell")}</p>

                            <p>{t("landingPage.intro.skipIntro")}</p>
                        </header>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
