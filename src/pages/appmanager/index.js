import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import SEO from '../../components/SEO/SEO'
import SiteHeader from '../../components/Layout/Header'
import config from '../../../data/SiteConfig'
import appMgrBg from '../../images/appmgr-bg.svg'

const QRCode = require('qrcode.react')
const BodyContainer = styled.div`
  padding: 0;
  overflow: hidden;
  .appmgr-start-right {
    height: 100vh;
    background-image: url(${appMgrBg})
  }
  .title {
    font-family: "Nunito Sans";
    font-size: 42px;
    font-weight: 700;
    line-height: 54px;
    margin-bottom: 25px;
    color: #5c54c7;
  }
  .banner-link {
    color: #fff;
    text-decoration: none;
  }
  .appmgr-start-left-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
  }
  p {
    color: #89879f;
    font-weight: 200;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 40px
  }
  .appmgr-button {
    margin-top: 50px;
  }
  .appmgr-button a {
    background-color: #715ad1;
    border-radius: 3px;
    color: #fff;
    padding: 16px;
    text-decoration: none;
    font-weight: 600;
    font-size: 22px;
  }
`

class AppManagerPage extends React.Component {
  render () {
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <div className='index-container'>
        <Helmet title={config.siteTitle} />
        <main>
          <AppManagerHeadContainer>
            <SiteHeader
              activeCategory={''}
              location={this.props.location}
              categories={this.props.data.navCategories} />
          </AppManagerHeadContainer>
          <BodyContainer className='appMgrBody'>
            <div className={'Grid Grid--gutters'}>
              <div className='Grid-cell appmgr-start-left-wrap'>
                <div className='appmgr-start-left'>
                  <h1 className='title'>Decentralized Identity for Decentralized Applications</h1>
                  <p>Seamless login. Ethereum transaction signing. User credential issuance and consumption.</p>
                  <div className={`appmgr-button`}>
                    <a href='/appmanager'>
                      Login with uPort
                    </a>
                  </div>
                </div>
              </div>
              <div className='Grid-cell appmgr-start-right' />
            </div>
          </BodyContainer>
        </main>
      </div>
    );
  }
}

const AppManagerHeadContainer = styled.div`
  background: ${props => props.theme.brand}
`

export const pageQuery = graphql`
query AppManagerQuery {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { type: { eq: "content" }}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
          }
        }
      }
    }
    navCategories:
    allMarkdownRemark(
      filter: { frontmatter: { category: { ne: null }, index: { ne: null }}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          headings {
            value
            depth
          }
          frontmatter {
            category
            index
          }
        }
      }
    }
  }
`

const IndexHeadContainer = styled.div`
  background: ${props => props.theme.brand};
`
export default AppManagerPage