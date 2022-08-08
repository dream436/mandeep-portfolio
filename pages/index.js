import Head from "next/head";
import Image from "next/image";

export default function Home() {

  let fb = "https://www.facebook.com/mandeep.lamba.963/"
  let insta = "https://www.instagram.com/mandeep_lamba43"
  let github = "https://www.github.com/dream436"
  let gmail = "mailto:mandeeplamba43@gmail.com"
  let twitter = "https://twitter.com/mandeep31206378"

  return (
    <div>




      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="This is a protfolio website of mamdeep lamba ."
        />
        <meta name="author" content="Devcrud" />
        <title>Mandeep Lamba</title>

        <link
          rel="stylesheet"
          href="assets/vendors/themify-icons/css/themify-icons.css"
        />

        <link rel="stylesheet" href="assets/css/mandeep.css" />
      </Head>

      <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        <a
          href="./components"
          className="btn btn-primary btn-component"
          data-spy="affix"
          data-offset-top="600"
        >
          <i className="ti-shift-left-alt"></i> My projects 
        </a>
        <header className="header">
          <div className="container">
            <ul className="social-icons pt-3">
              <li className="social-item">
                <a className="social-link text-light" href={fb}>
                  <i className="ti-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-item">
                <a className="social-link text-light" href={twitter}>
                  <i className="ti-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-item">
                <a className="social-link text-light" href={gmail}>
                  <i className="ti-google" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-item">
                <a className="social-link text-light" href={insta}>
                  <i className="ti-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-item">
                <a className="social-link text-light" href={github}>
                  <i className="ti-github" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <div className="header-content">
              <h4 className="header-subtitle">Hello, I am</h4>
              <h1 className="header-title">Mandeep lamba</h1>
              <h6 className="header-mono">Frond end Designer | Developer</h6>
              <button className="btn btn-primary btn-rounded">
                <i className="ti-printer pr-2"></i>Print Resume
              </button>
            </div>
          </div>
        </header>
        <nav
          className="navbar sticky-top navbar-expand-lg navbar-light bg-white"
          data-spy="affix"
          data-offset-top="510"
        >
          <div className="container">
            <button
              className="navbar-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse mt-sm-20 navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a href="#home" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#resume" className="nav-link">
                    Resume
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav brand">
                <img
                  src="assets/imgs/avatar.jpg"
                  alt=""
                  className="brand-img"
                />
                <li className="brand-txt">
                  <h5 className="brand-title">Mandeep Lamba</h5>
                  <div className="brand-subtitle">Web Designer | Developer</div>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#portfolio" className="nav-link">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#blog" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item last-item">
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div id="about" className="row about-section">
            <div className="col-lg-4 about-card">
              <h3 className="font-weight-light">Who am I ?</h3>
              <span className="line mb-5"></span>
              <h5 className="mb-3">
                A Web Designer / Developer Located In Our Lovely Earth
              </h5>
              <p className="mt-20">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.sit
                amet, Qui deserunt consequatur fugit repellendusillo voluptas?
              </p>
              <button className="btn btn-outline-danger">
                <i className="icon-down-circled2 "></i>Download My CV
              </button>
            </div>
            <div className="col-lg-4 about-card">
              <h3 className="font-weight-light">Personal Info</h3>
              <span className="line mb-5"></span>
              <ul className="mt40 info list-unstyled">
                <li>
                  <span>Birthdate</span> : 07/30/2003
                </li>
                <li>
                  <span>Email</span> : mandeeplamba43@gmail.com
                </li>
                <li>
                  <span>Phone</span> : +91 705601330
                </li>
              </ul>
              <ul className="social-icons pt-3">
                <li className="social-item">
                  <a className="social-link" href="#">
                    <i className="ti-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link" href="#">
                    <i className="ti-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link" href="#">
                    <i className="ti-google" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link" href="#">
                    <i className="ti-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link" href="#">
                    <i className="ti-github" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 about-card">
              <h3 className="font-weight-light">My Expertise</h3>
              <span className="line mb-5"></span>
              <div className="row">
                <div className="col-1 text-danger pt-1">
                  <i className="ti-widget icon-lg"></i>
                </div>
                <div className="col-10 ml-auto mr-3">
                  <h6>UX Design</h6>
                  <p className="subtitle"> exercitat Repellendus, corrupt.</p>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-1 text-danger pt-1">
                  <i className="ti-paint-bucket icon-lg"></i>
                </div>
                <div className="col-10 ml-auto mr-3">
                  <h6>Web Development</h6>
                  <p className="subtitle">Lorem ipsum dolor sit consectetur.</p>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-1 text-danger pt-1">
                  <i className="ti-stats-up icon-lg"></i>
                </div>
                <div className="col-10 ml-auto mr-3">
                  <h6>Digital Marketing</h6>
                  <p className="subtitle">voluptate commodi illo voluptatib.</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section" id="resume">
          <div className="container">
            <h2 className="mb-5">
              <span className="text-danger">My</span> Resume
            </h2>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <div className="mt-2">
                      <h4>Expertise</h4>
                      <span className="line"></span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="title text-danger">2020 - Present</h6>
                    <p>Back-end</p>
                    <p className="subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nostrum recusandae, cupiditate ullam dolor ratione
                      repellendus.aliquid repudiandae saepe!.
                    </p>
                    <hr />
                    <h6 className="title text-danger">2020 - 2021</h6>
                    <p>Front-end Developer</p>
                    <p className="subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nostrum recusandae, cupiditate ullam dolor ratione
                      repellendus.aliquid repudiandae saepe!.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <div className="mt-2">
                      <h4>Education</h4>
                      <span className="line"></span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="title text-danger">2020 - Present</h6>
                    <p>B.E Computer Engineering</p>
                    <p className="subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Error corrupti recusandae obcaecati odit repellat ducimus
                      cum, minus tempora aperiam at.
                    </p>
                    <hr />
                    <h6 className="title text-danger">2017 - 2018</h6>
                    <p>10th</p>
                    <p className="subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eos, id officiis quas placeat quia voluptas dolorum rem
                      animi nostrum quae.aliquid repudiandae saepe!.
                    </p>
                    <hr />
                    <h6 className="title text-danger">2019 - 2020</h6>
                    <p>High School Degree with Computer Science</p>
                    <p className="subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nostrum recusandae, cupiditate ullam dolor ratione
                      repellendus.aliquid repudiandae saepe!.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <div className="pull-left">
                      <h4 className="mt-2">Skills</h4>
                      <span className="line"></span>
                    </div>
                  </div>
                  <div className="card-body pb-2">
                    <h6>hTL5 &amp; CSS3</h6>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        Style="width: 97%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h6>JavaScript</h6>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        Style="width: 85%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h6>Node js</h6>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        Style="width: 80%"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h6>SQL</h6>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        Style="width: 90%"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <div className="pull-left">
                      <h4 className="mt-2">Languages</h4>
                      <span className="line"></span>
                    </div>
                  </div>
                  <div className="card-body pb-2">
                    <h6>Hindi</h6>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        Style="width: 80%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h6>Marathi</h6>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        Style="width: 45%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h6>English</h6>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        Style="width: 67%"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-dark py-5">
          <div className="container text-center">
            <h2 className="text-light mb-5 font-weight-normal">
              I Am Available For FreeLance
            </h2>
            <button className="btn bg-primary w-lg">Hire me</button>
          </div>
        </section>

        <div className="section contact" id="contact">
          <div id="map" className="map"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="contact-form-card">
                  <h4 className="contact-title">Send a message</h4>
                  <form action="">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name *"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email *"
                        required
                      />
                    </div>

                    <div className="form-group ">
                      <button
                        type="submit"
                        className="form-control btn btn-primary"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-info-card">
                  <h4 className="contact-title">Get in touch</h4>
                  <div className="row mb-2">
                    <div className="col-1 pt-1 mr-1">
                      <i className="ti-mobile icon-md"></i>
                    </div>
                    <div className="col-10 ">
                      <h6 className="d-inline">
                        Phone : <br />{" "}
                        <span className="text-muted">+91 7056913340</span>
                      </h6>
                    </div>
                  </div>
                  <div className="row mb-2"></div>
                  <div className="row mb-2">
                    <div className="col-1 pt-1 mr-1">
                      <i className="ti-envelope icon-md"></i>
                    </div>
                    <div className="col-10">
                      <h6 className="d-inline">
                        Email :<br />{" "}
                        <span className="text-muted">mandeeplamba43@gmail</span>
                      </h6>
                    </div>
                  </div>
                  <ul className="social-icons pt-4">
                    <li className="social-item">
                      <a className="social-link text-dark" href={fb}>
                        <i className="ti-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social-item">
                      <a className="social-link text-dark" href={twitter}>
                        <i className="ti-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social-item">
                      <a className="social-link text-dark" href={gmail}>
                        <i className="ti-google" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social-item">
                      <a className="social-link text-dark" href={insta}>
                        <i className="ti-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social-item">
                      <a className="social-link text-dark" href={github}>
                        <i className="ti-github" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer py-3">
          <div className="container">
            <p className="small mb-0 text-light">
              &copy; <script>document.write(new Date().getFullYear())</script>{" "}
              Created With <i className="ti-heart text-danger"></i> By{" "}
              <a href="http://devcrud.com" target="_blank">
                <span
                  className="text-danger"
                  title="Bootstrap 4 Themes and Dashboards"
                >
                  Mandeep Lamba
                </span>
              </a>
            </p>
          </div>
        </footer>
        <script src="assets/vendors/jquery/jquery-3.4.1.js"></script>
        <script src="assets/vendors/bootstrap/bootstrap.bundle.js"></script>

        <script src="assets/vendors/bootstrap/bootstrap.affix.js"></script>

        <script src="assets/vendors/isotope/isotope.pkgd.js"></script>

        <script src="assets/js/mandeep.js"></script>
      </div>
    </div>
  );
}
