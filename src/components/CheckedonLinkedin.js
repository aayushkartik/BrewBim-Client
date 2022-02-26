import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Loading from "./Loading";
import { TableCheckedonLinkedin } from "./TableCheckedonLinkedin";

const mockUrl = `https://fc107437-8ac4-4a81-ab94-ac214eb04260.mock.pstmn.io`;

export const CheckedonLinkedin = () => {
  const [loading, setLoading] = useState(false);
  const [credits, setCredits] = useState(0);

  const fetchData = () => {
    setLoading(true);

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${mockUrl}/credit`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        var { credit } = result;
        setCredits(credit);
        console.log(result);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));

    // setCredits(response);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [credits]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="container">
        <div className="lm_nav mb-5">
          <div className="lm_tabs">
            <span>
              <Link className="nav-link" to="/app">
                Home
              </Link>
            </span>
            <span>
              <Link className="nav-link" to="list-master">
                Prospect List
              </Link>
            </span>
            <span>
              <Link className="nav-link" to="prospect-master">
                Prospects
              </Link>
            </span>
            <span>
              <Link className="nav-link" to="checked-on-linkedin">
                Checked on Linkedin
              </Link>
            </span>
          </div>
          <div className="credits">
            Credits : <span>{credits}</span>
          </div>
        </div>
        <TableCheckedonLinkedin />
      </div>
      <Footer />
    </>
  );
};
