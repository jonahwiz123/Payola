import HottestSection from "./HottestSection";
import LinkCard from "./LinkCard";
import styles from "./FeaturedContent.module.css";
const FeaturedContent = () => {
  return (
    <div className={styles.featuredContent}>
      <HottestSection
        propPadding="0px 0px var(--padding-16xl)"
        propWidth="272px"
        propPadding1="0px var(--padding-6xl)"
      />
      <section
        className={styles.contentSectionWrapper}
        id="Featured Content Cards"
      >
        <div className={styles.contentSection}>
          <LinkCard
            rectangle478="/rectangle-4783.png"
            designToCode="Design to code"
            minRead="3 min read"
            locofyaiTurnFigmaToCode="Locofy.ai – Turn Figma to Code!"
            goFromFigmaToCodeInMinimu="Go from Figma to code in minimum amount of time using Locofy. Take your.."
            avatar="/avatar@2x.png"
            annaRos="Anna Rosé"
            postedJustNow="Posted just now"
            propAlignSelf="stretch"
            propWidth="393.33px"
            propHeight="240px"
            propFlex="1"
            propJustifyContent="space-between"
            propGap="unset"
            propAlignSelf1="stretch"
            propWidth1="unset"
            propLineHeight="34px"
            propAlignSelf2="stretch"
            propHeight1="0.7px"
            propWidth2="40px"
            propHeight2="40px"
            propWidth3="145.47px"
            propWidth4="145.47px"
          />
          <LinkCard
            rectangle478="/rectangle-47841.png"
            designToCode="Integrations"
            minRead="2 min read"
            locofyaiTurnFigmaToCode="Best UI library to use in Figma"
            goFromFigmaToCodeInMinimu="Find out what UI library suit your product the most. From Material UI, Bootstrap, ..."
            avatar="/avatar31.png"
            annaRos="Isaac Tan"
            postedJustNow="Posted on Sep 5, 2022"
            propAlignSelf="stretch"
            propWidth="393.33px"
            propHeight="240px"
            propFlex="1"
            propJustifyContent="space-between"
            propGap="unset"
            propAlignSelf1="stretch"
            propWidth1="unset"
            propLineHeight="34px"
            propAlignSelf2="unset"
            propHeight1="0.7px"
            propWidth2="40px"
            propHeight2="40px"
            propWidth3="145.47px"
            propWidth4="145.47px"
          />
          <LinkCard
            rectangle478="/rectangle-47851.png"
            designToCode="Design to code"
            minRead="2 min read"
            locofyaiTurnFigmaToCode="Figma for Developers"
            goFromFigmaToCodeInMinimu="Developers often believe they will be off to a flying start if they skip the designing process and jump directly to code."
            avatar="/avatar41.png"
            annaRos="Justin Chen"
            postedJustNow="Posted on Sep 6, 2022"
            propAlignSelf="unset"
            propWidth="393.33px"
            propHeight="240px"
            propFlex="unset"
            propJustifyContent="flex-start"
            propGap="13px"
            propAlignSelf1="unset"
            propWidth1="361.33px"
            propLineHeight="34px"
            propAlignSelf2="stretch"
            propHeight1="0.7px"
            propWidth2="40px"
            propHeight2="40px"
            propWidth3="145.47px"
            propWidth4="145.47px"
          />
          <LinkCard
            rectangle478="/rectangle-4786.png"
            designToCode="Integrations"
            minRead="2 min read"
            locofyaiTurnFigmaToCode="Best UI library to use in Figma"
            goFromFigmaToCodeInMinimu="Find out what UI library suit your product the most. From Material UI, Bootstrap, ..."
            avatar="/avatar5.png"
            annaRos="Isaac Tan"
            postedJustNow="Posted on Sep 5, 2022"
            propAlignSelf="stretch"
            propWidth="393.33px"
            propHeight="240px"
            propFlex="1"
            propJustifyContent="space-between"
            propGap="unset"
            propAlignSelf1="stretch"
            propWidth1="unset"
            propLineHeight="34px"
            propAlignSelf2="unset"
            propHeight1="0.7px"
            propWidth2="40px"
            propHeight2="40px"
            propWidth3="145.47px"
            propWidth4="145.47px"
          />
          <LinkCard
            rectangle478="/rectangle-4787.png"
            designToCode="Design to code"
            minRead="3 min read"
            locofyaiTurnFigmaToCode="Locofy.ai – Turn Figma to Code!"
            goFromFigmaToCodeInMinimu="Go from Figma to code in minimum amount of time using Locofy. Take your.."
            avatar="/avatar6.png"
            annaRos="Anna Rosé"
            postedJustNow="Posted just now"
            propAlignSelf="stretch"
            propWidth="393.33px"
            propHeight="240px"
            propFlex="1"
            propJustifyContent="space-between"
            propGap="unset"
            propAlignSelf1="stretch"
            propWidth1="unset"
            propLineHeight="34px"
            propAlignSelf2="stretch"
            propHeight1="0.7px"
            propWidth2="40px"
            propHeight2="40px"
            propWidth3="145.47px"
            propWidth4="145.47px"
          />
          <LinkCard
            rectangle478="/undefined13.png"
            designToCode="Design to code"
            minRead="2 min read"
            locofyaiTurnFigmaToCode="Figma for Developers"
            goFromFigmaToCodeInMinimu="Developers often believe they will be off to a flying start if they skip the designing process and jump directly to code."
            avatar="/undefined11.png"
            annaRos="Justin Chen"
            postedJustNow="Posted on Sep 6, 2022"
            propAlignSelf="unset"
            propWidth="393.33px"
            propHeight="240px"
            propFlex="unset"
            propJustifyContent="flex-start"
            propGap="13px"
            propAlignSelf1="unset"
            propWidth1="361.33px"
            propLineHeight="34px"
            propAlignSelf2="stretch"
            propHeight1="0.7px"
            propWidth2="40px"
            propHeight2="40px"
            propWidth3="145.47px"
            propWidth4="145.47px"
          />
        </div>
      </section>
      <div className={styles.moreFeaturedContentWrapper}>
        <a className={styles.moreFeaturedContent}>More Featured Content...</a>
      </div>
    </div>
  );
};

export default FeaturedContent;