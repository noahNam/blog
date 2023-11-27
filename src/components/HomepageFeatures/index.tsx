import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '',
    Svg: require('@site/static/img/python2.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/fastapi2.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/aws_logo_smile.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/ddd.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/mysql_logo.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/clean.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/pydantic.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/docker.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/docusaurus_logo.svg').default,
    description: (
      <>
      </>
    ),
  }
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
