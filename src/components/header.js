import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import logo from "../images/veggie-med-cheeses-logo.png"

class Header extends React.Component {
  state = {
    visible: false,
    isDropDownOpen: false,
  }

  toggleDropDownOptions = () => {
    this.setState({ isDropDownOpen: !this.state.isDropDownOpen })
  }

  showMobileMenu = () => {
    this.setState(prevState => {
      return { visible: !prevState.visible }
    })
  }

  render() {
    const deliverablesList = this.props?.site?.edges.filter(post => {
      if (post.node.categories[0].name === "Deliverables") {
        return post
      }
    })
    const deliverablesOptions = deliverablesList?.map(deliverable => {
      return (
        <Link
          to={`/deliverables/${deliverable?.node?.slug}`}
          state={deliverable}
        >
          <li>{deliverable?.node?.title}</li>
        </Link>
      )
    })
    return (
      <header>
        <section className="mobile-nav">
          <Link to="/">
            {" "}
            <img src={logo} alt="logo-veggie-cheese" width="240px" />
          </Link>
          {this.state.visible ? (
            <div onClick={this.showMobileMenu} className="burger-icon-close">
              <span>X</span>
            </div>
          ) : (
            <div onClick={this.showMobileMenu} className="burger-icon-open">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </section>

        {this.state.visible ? (
          <nav className="mobile-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mission">Mission</Link>
              </li>
              <li>
                <Link to="/concept">Concept</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/publications">Publications</Link>
              </li>
              <li>
                <Link to="/data">Data</Link>
              </li>
              <li
                className="deliverables-menu"
                onClick={this.toggleDropDownOptions}
              >
                <div className="deliverables-options-mobile-wrap">
                  <span>Deliverables </span>
                  <span
                    className={`downward-arrow-icon-${this.state.isDropDownOpen}`}
                  >
                    {/* arrow right hex code */}
                    &#10148;
                  </span>
                </div>
                {this.state.isDropDownOpen ? (
                  <ul className="deliverables-drop-down">
                    {deliverablesOptions}
                  </ul>
                ) : null}
              </li>
              <li>
                <Link to="/graphic-material">Graphic Materials</Link>
              </li>
              <li>
                <Link to="/press">Press</Link>
              </li>
              <li>
                <Link to="/newsletter">Newsletter</Link>
              </li>

              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/for-silvia">For Silvia</Link>
              </li>
            </ul>
          </nav>
        ) : (
          <p></p>
        )}

        <nav className="desktop-menu">
          <Link to="/">
            {" "}
            <img
              className="logo"
              src={logo}
              alt="logo-veggie-cheese"
              width="240px"
            />
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mission">Mission</Link>
            </li>
            <li>
              <Link to="/concept">Concept</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/publications">Publications</Link>
            </li>
            <li>
              <Link to="/data">Data</Link>
            </li>
            <li className="deliverables-menu">
              Deliverables
              <ul className="deliverables-drop-down">{deliverablesOptions}</ul>
            </li>
            <li>
              <Link to="/graphic-material">Graphic Materials</Link>
            </li>
            <li>
              <Link to="/press">Press</Link>
            </li>
            <li>
              <Link to="/newsletter">Newsletter</Link>
            </li>

            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/for-silvia">For Silvia</Link>
            </li>
              
          </ul>
        </nav>

        <style jsx="true">{`
          .deliverables-drop-down {
            display: none !important;
            padding: 0 5px !important;
          }
          .deliverables-drop-down li {
            border-bottom: 2px solid transparent;
            cursor: pointer;
          }
          .deliverables-menu {
            cursor: pointer;
          }
          .deliverables-options-mobile-wrap {
            display: flex;
            justify-content: space-between;
            width: 90%;
          }
          .deliverables-menu .downward-arrow-icon-true {
            display: inline-block;
            width: fit-content;
            margin: 0;
            transform: rotate(270deg);
          }
          .deliverables-menu .downward-arrow-icon-false {
            display: inline-block;
            width: fit-content;
            margin: 0;
            transform: rotate(90deg);
          }
          .deliverables-menu:hover > .deliverables-drop-down {
            display: block !important;
          }

          .mobile-nav {
            display: flex;
            justify-content: space-between;
            padding: 20px;
          }

          .desktop-menu {
            display: none;
          }
          header a:hover {
            color: #222 !important;
          }
          .burger-icon-close span {
            font-size: 26px;
            color: #777;
            position: relative;
            top: 50px;
            right: 20px;
          }
          .burger-icon-open {
            position: relative;
            top: 55px;
            right: 10px;
          }

          .burger-icon-open span {
            width: 25px;
            border: 1px solid #777;
            margin: 4px;
            display: block;
          }
          .mobile-menu li {
            margin: 10px;
          }
          @media (min-width: 1200px) {
            .deliverables-drop-down {
              display: none !important;
              padding: 0 5px !important;
              position: absolute !important;
              background: #fff;
              z-index: 99;
              box-shadow: 0px 0px 7px 0px rgb(185 185 185 / 30%);
              top: 27px;
            }

            .deliverables-menu {
              cursor: pointer;
              position: relative;
            }
            .mobile-nav {
              display: none;
            }
            .mobile-menu {
              display: none;
            }
            .logo {
              position: relative;
              bottom: 10px;
            }
            .desktop-menu {
              display: flex;
              justify-content: space-around;
            }
            .desktop-menu ul {
              display: flex;
              position: relative;
            }
            .desktop-menu ul li {
              margin: 20px;
              border-bottom: 2px solid transparent;
            }
            .desktop-menu ul li:hover {
              border-bottom: 2px solid #79a43d;
            }
          }
        `}</style>
      </header>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost {
          edges {
            node {
              categories {
                name
              }
              title
              excerpt
              content
              slug
              id
            }
          }
        }
      }
    `}
    render={data => <Header site={data.allWordpressPost} />}
  />
)
