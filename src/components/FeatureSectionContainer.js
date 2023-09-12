import styles from "./FeatureSectionContainer.module.css";
const FeatureSectionContainer = () => {
  return (
    <section className={styles.featureSection} id="Features">
      <div className={styles.whyPayolaParent}>
        <h1 className={styles.whyPayola}>Why Payola?</h1>
        <div className={styles.powerfulYetCleanContainer}>
          <p className={styles.features}>Features</p>
          <p className={styles.thatMakeUs}>That Make Us Special</p>
        </div>
      </div>
      <div className={styles.features1}>
        <div className={styles.leftGroupParent}>
          <div className={styles.leftGroup}>
            <div className={styles.icbaselineRocketParent}>
              <img
                className={styles.icbaselineRocketIcon}
                alt=""
                src="/icbaselinerocket.png"
              />
              <div className={styles.growYourNetworkContainer}>
                <p className={styles.thatMakeUs}>{`Grow Your Network `}</p>
                <p className={styles.thatMakeUs}>
                  By Working With The Largest Brands
                </p>
              </div>
            </div>
            <div className={styles.icbaselineRocketGroup}>
              <img
                className={styles.icbaselineRocketIcon}
                alt=""
                src="/icbaselinerocket1.png"
              />
              <div
                className={styles.growYourNetworkContainer}
              >{`Save Time By Quickly Filtering & Browsing Through Hundreds of Affiliate Programs and Brand Sponsors`}</div>
            </div>
          </div>
          <div className={styles.rightGroup}>
            <div className={styles.icbaselineRocketContainer}>
              <img
                className={styles.icbaselineRocketIcon}
                alt=""
                src="/icbaselinerocket2.png"
              />
              <div className={styles.growYourNetworkContainer}>
                <p
                  className={styles.thatMakeUs}
                >{`Earn More Through Transparent `}</p>
                <p className={styles.thatMakeUs}>
                  and Intuitive Performance Trackers
                </p>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <img
                className={styles.icbaselineRocketIcon}
                alt=""
                src="/icbaselinerocket3.png"
              />
              <div className={styles.joinACommunityContainer}>
                <p
                  className={styles.thatMakeUs}
                >{`Join A Community Dedicated To Helping `}</p>
                <p
                  className={styles.thatMakeUs}
                >{`Everyone To Free Themselves From `}</p>
                <p className={styles.thatMakeUs}>
                  The Moden Industrial Workforce
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSectionContainer;
