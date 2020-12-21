import React from 'react';
import * as Glyphs from './glyphs';

/* TODO:
 - Fix Invert. Hard problem. How to tell icon to use child as mask?
   - Can this be replaced by wrapping in a mask with a predefined viewBox?
 - Fix .badge ~ use sizing
 - Enable setting color attribute to override svg colors
 - Test variable-width icons
 - Fix IconListNumbers numbering using CSS counter in embedded style
 - Fix link piece in person_3_link icon
 - Simplify API May require packaging in javascript to provide templating
 - Save icon data into Icons.svg, and source from file
 */

const viewBox = "0 0 64 64";

const PureGlyphs = Object.keys(Glyphs).filter(key => !Glyphs[key].includes('href'));
const ImpureGlyphs = Object.keys(Glyphs).filter(glyph => Glyphs[glyph].includes('href'));
const RenderedGlyphs = { __html: Object.keys(Glyphs).map(glyph => (Glyphs[glyph])) }

const Icon = props => (<svg className="icon" viewBox={viewBox} {...props}>{props.children}</svg>);
const IconDefs = props => (<svg className="icon-defs" viewBox={viewBox} {...props}>{props.children}</svg>);

const Icons = () => (
  <>
    <IconDefs className="icon-defs" viewBox="0 0 64 64">
      <defs dangerouslySetInnerHTML={RenderedGlyphs} />
      <defs>
        <mask id="MaskBadge">
          <rect x="0%" y="0" width="100%" height="100%" fill="white" />
          <use href="#i_circle" className="badge mask-content" />
        </mask>

        <mask id="test-mask">
          <rect x="0%" y="0%" width="100%" height="100%" fill="black" />
          <circle cx="50%" cy="50%" r="40%" fill="white" />
        </mask>
      </defs>

    </IconDefs>

    <div>
      <h3>Pure glyphs</h3>
      <p>Pure glyphs serve as the basis for the overall style of the icon set. These should be as simple as possible.</p>
      <p>Some glyphs, like the Square, have special variables to allow derived glyphs to modify the inner shape. The Square provides an "--rx" variable so the RoundedSquare glyph can modify its corner radius.</p>

      {PureGlyphs.map(glyph => (<Icon key={glyph} title={glyph}><use href={'#i_' + glyph} className="border" /></Icon>))}
    </div>

    <hr />

    <div>
      <h3>Composite glyphs</h3>
      <p>Derived glyphs inherit from one or several primitive glyphs, and apply transforms or redefine variables to create a new glyph. Most are simple rotations.</p>
      <p>Non-DRY rotations and transformations are preferable to utility because some rotations may require unique modifications that don't fit the obvious pattern, and to reduce the already-large number of ways classes can be used.</p>

      {ImpureGlyphs.map(glyph => (<Icon key={glyph} title={glyph}><use href={'#i_' + glyph} className="border" /></Icon>))}
    </div>

    <hr />

    <div>

      <h3>Compositions</h3>
      <p>People: 2 instances of Person, plus a mask. person_3_link: 3 instances of Person, plus a line.</p>
      <p>Masks are instances of a primitive as well, so they remain dynamic, and linked to the primitive shape.</p>

      <Icon>
        <use href="#i_circle" className="border container" />
        <use href="#i_person_2" className="fill" />
      </Icon>

      <Icon>
        <use href="#i_circle" className="fill container" />
        <use href="#i_person_2" className="fill" />
      </Icon>

      <Icon>
        <use href="#i_circle" className="border container" />
        <use href="#i_person" className="border" />
      </Icon>

      <Icon>
        <use href="#i_circle" className="border container" />
        <use href="#i_person_2" className="fill" />
      </Icon>

      <Icon>
        <use href="#i_circle" className="fill container" />
        <use href="#i_person_3_link" className="border" />
      </Icon>

      <Icon>
        <use href="#i_circle" className="fill container" />
        <use href="#i_person_3_link" className="fill" />
      </Icon>

      <Icon>
        <use href="#i_circle" className="fill container" />
        <use href="#i_plus" className="border" style={{ '--stroke-width': 2.5 }} />
      </Icon>

      <Icon>
        <g className="mask-badge">
          <use href="#i_circle" className="border container" />
          <use href="#i_person" className="fill" />
        </g>
        <g className="badge">
          <use href="#i_circle" className="fill container" />
          <use href="#i_plus" className="border invert" style={{ "--stroke-width": 2 }} />
        </g>
      </Icon>

      <hr />

      <h3>Styling an Icon</h3>
      <p>Apply styles directly to an icon or its subcomponents, or use one of the available variables and attributes: 'color', '--fill', '--stroke-width', etc.</p>

      <Icon color="blue">
        <use href="#i_circle" className="border container" />
        <use href="#i_person_2" className="fill" />
      </Icon>

      <Icon color="blue">
        <use href="#i_circle" className="fill container" />
        <use href="#i_person_2" className="fill" />
      </Icon>

      <hr />

      <h3>Containers</h3>
      <p>Add the 'container' class to an element to increase its size, and decrease the size of following components.</p>
      <p>The scaling ratio is determined by the '--container-element-scale' variable.</p>

      <Icon>
        <use href="#i_circle" className="border container" />
        <use href="#i_square" className="border container" />
        <use href="#i_square_round" className="border container" />
        <use href="#i_rectangle" className="border container" />
        <use href="#i_rectangle_round" className="border container" />
        <use href="#i_delta" className="border container" />
        <use href="#i_hexagon" className="border container" />
      </Icon>

      <div style={{ "--stroke-width": "3px" }}>
        <Icon>
          <use href="#i_circle" className="fill container" />
          <use href="#i_arrow_forward" className="invert" />
        </Icon>

        <Icon>
          <use href="#i_square" className="fill container" />
          <use href="#i_arrow_forward" className="invert" />
        </Icon>

        <Icon>
          <use href="#i_square_round" className="fill container" />
          <use href="#i_arrow_forward" className="invert" />
        </Icon>

        <Icon>
          <use href="#i_rectangle" className="fill container" />
          <use href="#i_arrow_forward" className="invert" />
        </Icon>

        <Icon>
          <use href="#i_rectangle_round" className="fill container" />
          <use href="#i_arrow_forward" className="invert" />
        </Icon>

        <Icon>
          <use href="#i_delta" className="fill container" />
          <use href="#i_arrow_forward" className="invert" />
        </Icon>

        <Icon>
          <use href="#i_hexagon" className="fill container" />
          <use href="#i_arrow_forward" className="invert" />
        </Icon>
      </div>

      <hr />

      <h3>Badging an Icon</h3>

      <ol>

        <li>
          <p>Create your icon</p>
          <Icon>
            <use href="#i_circle" className="border container" />
            <use href="#i_person_2" className="fill" />
          </Icon>
        </li>

        <li>
          <p>Wrap the contents in a &lt;g&gt; element with the `.badge-mask` class</p>
          <Icon>
            <g mask="url(#MaskBadge)">
              <use href="#i_circle" className="border container" />
              <use href="#i_person_2" className="fill" />
            </g>
          </Icon>
        </li>

        <li>
          <p>Create your contents after the masked content</p>
          <Icon>
            <g className="mask-badge">
              <use href="#i_circle" className="border container" />
              <use href="#i_person_2" className="fill" />
            </g>
            <use href="#i_circle" className="fill container" />
            <use href="#i_plus" className="border invert" style={{ '--stroke-width': 2 }} />
          </Icon>

        </li>

        <li>
          <p>Wrap badge contents in a &lt;g&gt; element with the `.badge` class</p>
          <Icon>

            <mask id="MaskBadge">
              <rect x="0%" y="0" width="100%" height="100%" fill="white" />
              <use href="#i_circle" className="badge mask-content" />
            </mask>

            <g className="mask-badge">
              <use href="#i_circle" className="border container" />
              <use href="#i_person_2" className="fill" />
            </g>

            <g className="badge">
              <use href="#i_circle" className="fill container" />
              <use href="#i_plus" className="border invert" style={{ '--stroke-width': 2 }} />
            </g>
          </Icon>
        </li>

      </ol>

    </div>
  </>
);

export default Icons;