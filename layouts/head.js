import Head from 'next/head'

export const defaultMeta = {
  description:
    'Ouracademy es una academia para aprender de ingeniería de software, desde métodos y prácticas hasta las últimas tecnologías en el desarrollo de software',
  og: {
    type: 'website',
    image:
      'https://scontent.flim1-2.fna.fbcdn.net/v/t1.0-9/10502476_661884230610559_1709997781224995208_n.png?oh=818b1d3b257f56e30c80bc59ed83ab0d&oe=59E52AA0'
  }
}
export const defaultTitle =
  'Ouracademy - Aprendiendo juntos a desarrollar software'

export default ({ title, meta = defaultMeta }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width,minimum-scale=1" />
    <title>{title ? `${title} - Ouracademy` : defaultTitle}</title>
    <meta name="description" content={meta.description} />
    <meta property="og:type" content={meta.og.type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={meta.description} />
    <meta property="og:image" content={meta.og.image} />
  </Head>
)
