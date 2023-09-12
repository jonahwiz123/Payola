import { useMemo } from "react";
import styles from "./LinkCard.module.css";
const LinkCard = ({
  rectangle478,
  designToCode,
  minRead,
  locofyaiTurnFigmaToCode,
  goFromFigmaToCodeInMinimu,
  avatar,
  annaRos,
  postedJustNow,
  propAlignSelf,
  propWidth,
  propHeight,
  propFlex,
  propJustifyContent,
  propGap,
  propAlignSelf1,
  propWidth1,
  propLineHeight,
  propAlignSelf2,
  propHeight1,
  propWidth2,
  propHeight2,
  propWidth3,
  propWidth4,
}) => {
  const article1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const rectangleIcon1Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv7Style = useMemo(() => {
    return {
      flex: propFlex,
      justifyContent: propJustifyContent,
      gap: propGap,
    };
  }, [propFlex, propJustifyContent, propGap]);

  const frameDiv8Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth1,
    };
  }, [propAlignSelf1, propWidth1]);

  const locofyaiTurnStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  const frameDiv9Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
    };
  }, [propAlignSelf2]);

  const lineDivStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const avatarIconStyle = useMemo(() => {
    return {
      width: propWidth2,
      height: propHeight2,
    };
  }, [propWidth2, propHeight2]);

  const annaRosStyle = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const postedJustNowStyle = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  return (
    <a className={styles.article1} href="#" style={article1Style}>
      <img
        className={styles.article1Child}
        alt=""
        src={rectangle478}
        style={rectangleIcon1Style}
      />
      <div className={styles.frameParent} style={frameDiv7Style}>
        <div className={styles.frameGroup} style={frameDiv8Style}>
          <div className={styles.frameContainer}>
            <div className={styles.designToCodeParent}>
              <div className={styles.designToCode}>{designToCode}</div>
              <div className={styles.minReadWrapper}>
                <div className={styles.minRead}>{minRead}</div>
              </div>
            </div>
            <h2
              className={styles.locofyaiTurn}
              id="card title"
              style={locofyaiTurnStyle}
            >
              {locofyaiTurnFigmaToCode}
            </h2>
          </div>
          <div className={styles.goFromFigmaToCodeInMinimWrapper}>
            <div className={styles.goFromFigma}>
              {goFromFigmaToCodeInMinimu}
            </div>
          </div>
        </div>
        <div className={styles.lineParent} style={frameDiv9Style}>
          <div className={styles.frameChild} style={lineDivStyle} />
          <div className={styles.articleAuthor}>
            <img
              className={styles.avatarIcon}
              alt=""
              src={avatar}
              style={avatarIconStyle}
            />
            <div className={styles.authorText}>
              <div className={styles.annaRos} style={annaRosStyle}>
                {annaRos}
              </div>
              <div className={styles.postedJustNow} style={postedJustNowStyle}>
                {postedJustNow}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default LinkCard;
