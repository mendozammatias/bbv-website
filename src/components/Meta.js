import React from 'react';
import { Helmet } from 'react-helmet';

const defaults = {
  templateTitle: null,
  openGraph: {
    defaultImageHeight: null,
    defaultImageWidth: null,
  },
};

export const getAllTags = (config) => {
  const metas = [];
  const links = [];
  const scripts = [];

  metas.push({
    name: 'rating',
    content: 'general',
  });

  metas.push({
    name: 'distribution',
    content: 'global',
  });

  if (config.title) {
    metas.push({
      itemprop: 'name',
      content: config.title,
    });
  }

  if (config.keywords) {
    metas.push({
      name: 'keywords',
      content: config.keywords,
    });
  }

  if (config.noindex) {
    metas.push({
      name: 'robots',
      content: 'noindex, follow',
    });

    metas.push({
      name: 'googlebot',
      content: 'noindex, follow',
    });
  } else {
    metas.push({
      name: 'robots',
      content: 'index, follow',
    });

    metas.push({
      name: 'googlebot',
      content: 'index, follow',
    });
  }

  if (config.description) {
    metas.push({
      name: 'description',
      content: config.description,
    });

    metas.push({
      itemprop: 'description',
      content: config.description,
    });
  }

  if (config.hasOwnProperty('twitter')) {
    if (config.twitter.cardType) {
      metas.push({
        name: 'twitter:card',
        content: config.twitter.cardType,
      });
    }

    if (config.twitter.site) {
      metas.push({
        name: 'twitter:site',
        content: config.twitter.site,
      });
    }

    if (config.twitter.handle) {
      metas.push({
        name: 'twitter:creator',
        content: config.twitter.handle,
      });
    }

    if (config.twitter.title) {
      metas.push({
        name: 'twitter:title',
        content: config.twitter.title,
      });
    }

    if (config.twitter.description) {
      metas.push({
        name: 'twitter:description',
        content: config.twitter.description,
      });
    }

    if (config.twitter.image) {
      metas.push({
        name: 'twitter:image',
        content: config.twitter.image,
      });
    }

    if (config.twitter.imageAlt) {
      metas.push({
        name: 'twitter:image:alt',
        content: config.twitter.imageAlt,
      });
    }
  }

  if (config.hasOwnProperty('openGraph')) {
    if (config.openGraph.url) {
      metas.push({
        property: 'og:url',
        content: config.openGraph.url,
      });
    }

    if (config.openGraph.type) {
      metas.push({
        property: 'og:type',
        content: config.openGraph.type,
      });
    }

    if (config.openGraph.title) {
      metas.push({
        property: 'og:title',
        content: config.openGraph.title,
      });
    }

    if (config.openGraph.description) {
      metas.push({
        property: 'og:description',
        content: config.openGraph.description,
      });
    }

    if (config.openGraph.images && config.openGraph.images.length) {
      config.openGraph.images.forEach((image, index) => {
        metas.push({
          property: 'og:image',
          content: image.url,
        });

        if (image.alt) {
          metas.push({
            property: 'og:image:alt',
            content: image.alt,
          });
        }

        if (image.width) {
          metas.push({
            property: 'og:image:width',
            content: image.width,
          });
        } else if (
          defaults.openGraph.defaultImageWidth ||
          config.openGraph.defaultImageWidth
        ) {
          if (config.openGraph.defaultImageWidth) {
            defaults.openGraph.defaultImageWidth =
              config.openGraph.defaultImageWidth;
          }

          metas.push({
            property: 'og:image:width',
            content: defaults.openGraph.defaultImageWidth,
          });
        }

        if (image.height) {
          metas.push({
            property: 'og:image:height',
            content: image.height,
          });
        } else if (
          defaults.openGraph.defaultImageHeight ||
          config.openGraph.defaultImageHeight
        ) {
          if (config.openGraph.defaultImageHeight) {
            defaults.openGraph.defaultImageHeight =
              config.openGraph.defaultImageHeight;
          }

          metas.push({
            property: 'og:image:height',
            content: defaults.openGraph.defaultImageHeight,
          });
        }
      });
    }

    if (config.openGraph.locale) {
      metas.push({
        property: 'og:locale',
        content: config.openGraph.locale,
      });
    }

    if (config.openGraph.site_name) {
      metas.push({
        property: 'og:site_name',
        content: config.openGraph.site_name,
      });
    }
  }

  if (config.canonical) {
    links.push({
      rel: 'canonical',
      href: config.canonical,
    });
  }

  if (config.ampHtml) {
    links.push({
      rel: 'amphtml',
      href: config.ampHtml,
    });
  }

  if (config.shortLink) {
    links.push({
      rel: 'shortlink',
      href: config.shortLink,
    });
  }

  return {
    metas,
    links,
    scripts,
  };
};

class Meta extends React.PureComponent {
  static displayName = 'Meta';

  static defaultProps = {
    seo: {},
  };

  render() {
    const { links, metas, scripts } = getAllTags(this.props.seo);

    return (
      <Helmet title={this.props.seo.title} defer={false}>
        {this.props.seo.lang && <html lang={this.props.seo.lang} />}
        <meta
          name="google-site-verification"
          content="ZXZU9hohsfmP39sz36nXWwUZSQIWfWnOT25UliGdA4M"
        />
        {metas.map((props, idx) => (
          <meta key={`meta_${idx}`} {...props} />
        ))}
        {links.map((props, idx) => (
          <link key={`link_${idx}`} {...props} />
        ))}
        {scripts.map((props, idx) => (
          <script key={`script_${idx}`} {...props} />
        ))}
        {this.props.children}
      </Helmet>
    );
  }
}

export default Meta;
