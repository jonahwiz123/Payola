import { useMemo } from "react";
import styles from "./HottestSection.module.css";
const HottestSection = ({ propPadding, propWidth, propPadding1 }) => {
  const frameSectionStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv6Style = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding1,
    };
  }, [propWidth, propPadding1]);

  return (
    <section
      className={styles.frameParent}
      id="Featured Content Title Card"
      style={frameSectionStyle}
    >
      <div className={styles.titleWrapper} style={frameDiv6Style}>
        <h1 className={styles.title} id="Featured Content">
          <p className={styles.hottest}>
            <i className={styles.hottest1}>Hottest</i>
            <span className={styles.span}>{` `}</span>
          </p>
          <p className={styles.newContent}>New Content</p>
        </h1>
      </div>
      <div className={styles.subtitle}>
        <p className={styles.hottest}>
          <span>
            <span className={styles.onlyTheAbsolute}>Only the absolute</span>
            <span className={styles.steamiest}>{` `}</span>
            <i className={styles.steamiest}>hottest</i>
            <span className={styles.steamiest}>{` `}</span>
            <span className={styles.onlyTheAbsolute}>and</span>
            <span className={styles.steamiest}>{` `}</span>
            <i className={styles.steamiest}>steamiest</i>
            <span className={styles.steamiest}>{` `}</span>
            <span className={styles.content}>content</span>
          </span>
        </p>
        <p className={styles.hottest}>
          <span>
            <span className={styles.content}>
              from the best articles and videos, to set your marketing game on
            </span>
            <span className={styles.steamiest}>{` `}</span>
          </span>
          <i className={styles.fire}>fire!</i>
        </p>
      </div>
    </section>
  );
};

export default HottestSection;
