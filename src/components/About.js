/* eslint-disable import/no-anonymous-default-export */

export default (props) => (
  <div className="about">
    <section>
      <h3>About This App</h3>
      <p>
        This app allows users to upload sprite sheets which are converted to 2D
        gcode files. These files can be used by CNC software to render 8-bit
        pixel art.
      </p>
      <ul>
        <li>
          The primary value of this tool is that it finds <i>contiguous</i>{" "}
          color areas in a given sprite and draws a path for each area (instead
          of defining path for each indiviual pixel).
        </li>
        <li>
          Contigous regions of the same color are grouped together so that all
          the contiguous areas for one color can be processed before moving on
          to the next.
        </li>
        <li>
          A <i>pause message</i> is inserted between each color group.
        </li>
        <li>
          All images are periodically deleted, but you should not upload
          anything you want to keep private.
        </li>
      </ul>
      <em>
        Users should plan to adjust their own z values and tooling parameters.
      </em>
    </section>
    <hr />
    <section className="footer">
      <div>
        Created by <a href="https://garykertis.com">Gary Kertis</a>
      </div>
      <div style={{ textAlign: "right" }}>
        <br />
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          <img
            alt="Creative Commons License"
            style={{ borderWidth: 0 }}
            src="https://i.creativecommons.org/l/by/4.0/88x31.png"
          />
        </a>
        <br />
        This work is licensed under a{" "}
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          Creative Commons Attribution 4.0 International License
        </a>
      </div>
    </section>
  </div>
);
