/* eslint-disable import/no-anonymous-default-export */

export default (props) => (
  <div className="about">
    <section>
      <h3>Instructions</h3>
      <ol>
        <li>Upload a sprite sheet using the file button.</li>
        <li>
          Adjust the selected area by dragging the image preview and zoom
          controls
        </li>
        <li>
          Once the correct area is selected, adjust desired output by specifying
          how large one pixel should be.
          <em>
            Keep an eye on the final output to ensure you don't end up with an
            overlarge cutting area.
          </em>
        </li>
        <li>
          Pixel shading means that diagonal lines are drawn across each
          contiguous color area every X millimeters. If this value is zero, no
          shading is applied.
        </li>
        <li>
          Once the params are set, clicking <i>generate</i> will create the
          gcode. This code can be copy / pasted into a text editor, or the
          excellent <a href="https://ncviewer.com/">ncviewer</a> for further
          refining.
        </li>
      </ol>
    </section>
    <section>
      <h3>Tips</h3>
      <ol>
        <li>
          If you are cutting each color out of a different material, perform a
          find on the gcode for M0 messages. These indicate a new color group.
        </li>
        <li>
          The default z-values are Z5 for movement and Z0 for cutting /
          processing. A find/replace in a text editor will allow easy
          manipulation.
        </li>
        <li>
          If you don't want each color group to be treated separately,
          converting to grayscale won't work. Instead, convert the image to a
          1-bit color palette using GIMP or similar. More{" "}
          <a href="https://graphicdesign.stackexchange.com/questions/103717/how-do-i-create-true-two-color-images-in-gimp">
            here.
          </a>
        </li>
      </ol>
    </section>
  </div>
);
