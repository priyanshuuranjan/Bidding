import React from "react";
import "./Contact.css";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "89574f8f-24ac-4201-a01e-8d66faa7cee9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="title">
        CONTACT US
        <h2>Get in Touch💕</h2>
      </div>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a message{" "}
            <img
              src="https://greatstack.in/assets/msg-icon-ClKDHhj8.png"
              alt=""
            />
          </h3>
          <p>
            Feel free to reach out through the contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATVSURBVHgB7VpRcts2EN1FPf6ro96Adn86nVpRTlD7BI5OYPEEVk4Q9QR2T0D6BHFOYPcE5iidTL9i3qD8zqRCd0HQlSiABEmQlpO+H4sgDSyWwL59CyIYEPwSnQjEC4kw4Ut43khRQrIC+T79EMblm7h+EfwcTXAPI/o5ga8TqfwsT9O/wrRoEMWPH8fX5zT5W/h6J88IcB8feK5Fg1oBwU+RugHfDjL5hVbCxzBRK4AmfwvfFkZ6qwMGx9EMMb+wQQIkmAfDETwPZJKDX812lit5SisAz+oeSpezVw/L2Q8S5O+w4yAbr6WQh2wzLfNXlQ8LmAtAu5ckU8ef4V1xnS7DObX9BjsKto1snKVJmPE173FqvLM9j4AvBVbwPEp8UW6jARY00BvYMbBNbBs0QyAqbyOcHI2v35abaaAr3hr0M4OnR5Zv0/CqfEPZTnOo+udqB4Dy7MLoBNoatNd4j6XwdEjZhvVtWoBtZtvrOsDDcSzBAZROxqvvaJnp/VUgmFAOsVI0GsCwSGjyU7InXW8MgmgkXuCllDBz6aR2BRQgXTDjiXLStN7OBvBbIAfdwECgyfHqO92aPCd0B3jrOnmG8wpYw1Y+/WjAOFpQZH0LPYKpmNmo3K6z2cYr0XkFrI/FA7FwKt/QDNEbTWqa2548i7h9vIcW27CNA9SYlEre0xvfMkY5QcoQ/CLjPk00p0UcT75VltrWAQq03C+NDEG6W2dhKXRHpva7Qcvz2KTzY+iATg5gKJo8ji/L7ZyFseHQzQk5zSWU0ZVwNI4vXWiuDm2CoLkjYgGiydBCk++geZ3BSnP4PfVXk+C4wpsDNOwMcRzFpDrPXTphQcNCZcuZLSN9FTpvgRJyhijlCgzawzMXhigLmseOe5g8w7cDGGzoPb3x1+UbdTRpEzRcpG1Lc3XowwGMES33dxU0OYVNIcU0N7UImgsU6s33UozxHQO2BwBcfFqeb711Do6wgnyVCLgpBzuGq6DpZF/fDlCDSLj69GHmXENoKmi6YBAHaCTEEFMTQ6xD0dzBcOX5vmKACRObhiiggt2BCnaDnU0MuQL+A8tZlO/pbwoc3JCCpqTirKfkpgn2wCNU1VjAAj4rsWQ/YqOJUnA82TiYw8quE9IWIewTc6xgTv97AZ7gzQE6gVnoy4Si/CmlwH+DB6iU+ONj7JgTvWa+6g4+YoBVqnrERlZoySVaoasDUptUFSvhbZmKf9AkuW98FGW7OCDRdbnepGoBqkfOjZI7r0d2ktytWACRpC8apK9nqWqAMZegeDOiVRKRo1437K+5A3wXJVvAa1G20RbQas1WlBzqbMBrUdbVAdbjp7WiZADDoa4o68wQLg6oPH7qWpTsgoqirDND1DkgMZ3AMI5exlHfUtUF1qKsI0NgMI4fLEfkRUXWVJpqU+TsG1aG0GeXJnszQS5MTL2paG+vy+3il2QTUz2S50AxwfhlC83xD9oCVIE1Y6ME1WddziMsDIG/Gp+mUr7SYJQL8CdywfZ9+Qa+wJ3YE2e7sN+bwMH29GE5O1RqkKTmVFPZBjjKsl6UMHzJoCvqbNcBMmcBdYzl/0BzZ6HUq2a2zW+Fn+5rj6GQ6uO2x8BvrMPwx5MC8Ezmoua5fBxpQ0ZV6TtK2K45QYL/sYl/AYgsxKl0s/vCAAAAAElFTkSuQmCC"
                alt=""
              />
              priyanshuranjan232@gmail.com
            </li>
            <li>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              +91 9523743222
            </li>
            <li>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABCCAYAAAAR6FVNAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATQSURBVHgBzZpNdttGDIAxI8e79imrbil309dXK/IN5BNYPYHFE8Q9QewTtDkB6RPYPoGVXXdR3b6+bppMlllF2SYxEWBEKhYlihzMSOb3np5Eij/ADAACGCoIQBQlXfgORgDqmaZNVDCg3d38U2AAwSDAFABfwWeYmv9iA54oEMJC6+/1c0Qc0lWGIGNK578kZSZSZZwVWAgOeAbLI+yFQkizz3jhqoiTAgf9yxehBS8xU6D+eHN3etH0hEYKRD8lkdpXV/RzALvB4Cc8bjIbuu6AH/uXpyT8a9id8AwP2OvoMBnVHbhRATaZDDCF7ZnMJrpKqSuWYdNBnao/cns/h8dn2P3h5OPs/c2f6/5c6wM8daw9tAgNavz/3ellef+KArnDss0/htlsYkaOfVR27BUfIOFvoX3CM908Ei6xpEDuMBG0l0HUT84f7liYUG46b6H9zFBjz0zjGW98m4En6gX4M0OECeU3MX7BI7LZnv1keMz7KF24Bn+6kMFZsWFnIMToU8h9ScNxXoxMFdEgiUiAc0oZTkHOYhbmM/BEnE3OL0YjbO7iszrhGTrG0LFjPoc3QQbPwph/WAUo5j8HGYZG4sj8E0/AET6HzmUlapVeh0J1Yr99zMeOvED4h0S/JEOlbeh2v7/Gp5rMR5SkKQWpr/CMnQn2Hwn3MNLSaipT2Dhnr4WcHySmRKWrJlt6Bo7QiN2wM0IgrPMj18rORJoK8AhcCRPPS5fES9dzFDcRlCR16IhGazP3omt2ayuydSi1/wFCsy8KpzIF2oRIAcRPTyE0X2RZsEbJ4/x+CwW+EilgZD7gl4hVXfUE3KFkThJ/6QFCWWWwqs2mMwpqWyhlKHUnBRS+A3e6+j5I/TBHWoso/ItNyIAAegCecSIGnthkTs1TYwHkA5n8oURZ5BVPPwixpqNVAlJIdg17Xk9V7hTcSmbCjvy8fROBEM5kdZ5ITUAOj+LtwWGaNJkNbs8f9NPf8xpAHAgwl3nPbih8RaFxCB6QT4xpRMekyDX1U29sbpPl6YEmQTswsOGX0neEAJDM/GUVoBtN6CZBogopMiJBR/mVt4eeZ8SLvlCvn3KC1saO3DrM27txj38snsTisu4RoLA7KX5/SyV0+CJlWzwsZxcKUDSaekajncDR52E5q5f/DFiob43l0nNlfYCcmXtEEbSThfMWrKTTbXbmdRayWg9oSEHes9wmxvwdp+WdKwpwatFGX6iSqXKhu3eY3nq8AxGaFdsvqCwp2zQLtFjya9V/lQrkTVfnbllobBP537gy5d9c1Gu7lCPq3wfC1DWRNyqQO3QMjwSbcV0TubatQqHrWuHu8yRrOmvCZplGfaGsY2fBwO4wTdcfGr/w5LMU5Ipdd5vGjWr1xp25PCr9BluG7nHRVHjG/Z25wySlVc0ttBbneRgv17qc494b7djQGn6Bg31svlbmhLMCNrRq+2Q0EA5ebz5uslBeRv7e6IC6almQ94oK4Q0IEK/Q8A0pRxGvtOfY2fRZ8RTPQEH0czJQe6Iu2ywfeS9/8l4j40SLHvnO4ZVTFF/hGe8ZKHCYiSAjXxBMAaaBEkGFZ4Ius1pzojQA1odY45IiNCX4OrGNTnrlZaapT6jcRFATKpO/+8yt9WvJQ6oJXwGdQx98HXdwgAAAAABJRU5ErkJggg=="
                alt=""
              />
              Delhi, India
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />
            <label>Write your message here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
            <button
              type="submit"
              className="btn dark-btn"
              style={{ width: "150px", height: "50px" }}
            >
              Submit now
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAeCAYAAABnuu2GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADPSURBVHgB7dnRDYJAEEXRpxVYAiXQgpVICVqB2IEdaAeUQAlrB9iBdjDOyPqhm2yCX7xhTzIJhITkBgJkAWZIRDY6vYw624cHGtLItzA1bo15+o2odTqwi7dikNQF7LzHVTrD0uKOYFfiWJU4VhpR6zyWFrez46u4cUb6GcOssbBBNyr48rSPYE9X6uMddtC5w5cTWGUeHnuwykS1YJV5QbdgVaJYlCgWmagrWMm4mOMyKriKMpKuBJsw5RwsK8E3nS3YxVuxi1eqlz9+SrwAYrdvIKJt0HIAAAAASUVORK5CYII="
                alt=""
              />
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
