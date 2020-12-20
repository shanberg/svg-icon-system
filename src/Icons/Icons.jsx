import React from 'react';
import * as Glyphs from './glyphs';

/* TODO:
 - Fix Invert. Hard problem. How to tell icon to use child as mask?
   - Can this be replaced by wrapping in a mask with a predefined viewBox?
 - Fix .badge ~ use sizing
 - Enable setting color attribute to override svg colors
 - Test variable-width icons
 - Fix IconListNumbers numbering using CSS counter in embedded style
 - Simplify API. May require packaging in javascript to provide templating
 - Save icon data into Icons.svg, and source from file
 */

const viewBox = "0 0 64 64";

const PureGlyphs = Object.keys(Glyphs)
  .filter(key => !Glyphs[key].includes('href'));

const ImpureGlyphs = Object.keys(Glyphs)
  .filter(glyph => Glyphs[glyph].includes('href'));

const RenderedGlyphs = { __html: Object.keys(Glyphs).map(glyph => (Glyphs[glyph])) }

const Icon = props => (<svg className="icon" viewBox={viewBox} {...props}>{props.children}</svg>);

function Icons() {
  return (
    <>
      <svg className="icon-defs" viewBox="0 0 64 64" style={{ visibility: "hidden" }}>
        <defs dangerouslySetInnerHTML={RenderedGlyphs} />
        <defs>
          <mask id="MaskBadge">
            <rect x="0%" y="0" width="100%" height="100%" fill="white" />
            <use href="#i.circle" className="badge mask-content" />
          </mask>
        </defs>
      </svg>

      <div>
        <h3>Pure glyphs</h3>
        <p>Pure glyphs serve as the basis for the overall style of the icon set. These should be as simple as possible.</p>
        <p>Some glyphs, like the Square, have special variables to allow derived glyphs to modify the inner shape. The Square provides an "--rx" variable so the RoundedSquare glyph can modify its corner radius.</p>

        {PureGlyphs.map(glyph => (<Icon><use href={'#i.' + glyph} className="border" /></Icon>))}
      </div>

      <hr />

      <div>
        <h3>Composite glyphs</h3>
        <p>Derived glyphs inherit from one or several primitive glyphs, and apply transforms or redifine variables to create a new glyph. Most are simple rotations. Rotated derived glyhs are preferable to classes or explicit transformations because some rotations may require point modifications, and to reduce complexity during use.</p>

        {ImpureGlyphs.map(glyph => (<Icon><use href={'#i.' + glyph} className="border" /></Icon>))}
      </div>

      <hr />

      <div>

        <h3>Compositions</h3>
        <p>People: 2 instances of Person, plus a mask. PeopleLinked: 3 instances of Person, plus a line.</p>
        <p>Masks are instances of a primitive as well, so they remain dynamic, and linked to the primitive shape.</p>

        <Icon>
          <use href="#i.circle" className="border container" />
          <use href="#i.peopleGroup" className="fill" />
        </Icon>

        <Icon>
          <use href="#i.circle" className="fill container" />
          <use href="#i.peopleGroup" className="fill" />
        </Icon>

        <Icon>
          <use href="#i.circle" className="border container" />
          <use href="#i.person" className="border" />
        </Icon>

        <Icon>
          <use href="#i.circle" className="border container" />
          <use href="#i.peopleGroup" className="fill" />
        </Icon>

        <Icon>
          <use href="#i.circle" className="fill container" />
          <use href="#i.peopleLinked" className="border" />
        </Icon>

        <Icon>
          <use href="#i.circle" className="fill container" />
          <use href="#i.peopleLinked" className="fill" />
        </Icon>

        <Icon>
          <use href="#i.circle" className="fill container" />
          <use href="#i.plus" className="border" style={{ '--stroke-width': 2.5 }} />
        </Icon>

        <Icon>
          <g className="mask-badge">
            <use href="#i.circle" className="border container" />
            <use href="#i.person" className="fill" />
          </g>
          <g className="badge">
            <use href="#i.circle" className="fill container" />
            <use href="#i.plus" className="border invert" style={{ "--stroke-width": 2 }} />
          </g>
        </Icon>


        <h3>Styling an Icon</h3>

        <p>Set the Color attribute on an icon to redefine the primary color</p>

        <Icon color="blue">
          <use href="#i.circle" className="border container" />
          <use href="#i.peopleGroup" className="fill" />
        </Icon>

        <Icon color="blue">
          <use href="#i.circle" className="fill container" />
          <use href="#i.peopleGroup" className="fill" />
        </Icon>

        <h3>Badging an Icon</h3>

        <ol>

          <li>
            <p>Create your icon</p>
            <Icon>
              <use href="#i.circle" className="border container" />
              <use href="#i.peopleGroup" className="fill" />
            </Icon>
          </li>

          <li>
            <p>Wrap the contents in a &lt;g&gt; element with the `.badge-mask` class</p>
            <Icon>
              <g mask="url(#MaskBadge)">
                <use href="#i.circle" className="border container" />
                <use href="#i.peopleGroup" className="fill" />
              </g>
            </Icon>
          </li>

          <li>
            <p>Create your contents after the masked content</p>
            <Icon>
              <g className="mask-badge">
                <use href="#i.circle" className="border container" />
                <use href="#i.peopleGroup" className="fill" />
              </g>
              <use href="#i.circle" className="fill container" />
              <use href="#i.plus" className="border invert" style={{ '--stroke-width': 2 }} />
            </Icon>
          </li>

          <li>
            <p>Wrap badge contents in a &lt;g&gt; element with the `.badge` class</p>
            <Icon>

              <mask id="MaskBadge">
                <rect x="0%" y="0" width="100%" height="100%" fill="white" />
                <use href="#i.circle" className="badge mask-content" />
              </mask>

              <g className="mask-badge">
                <use href="#i.circle" className="border container" />
                <use href="#i.peopleGroup" className="fill" />
              </g>

              <g className="badge">
                <use href="#i.circle" className="fill container" />
                <use href="#i.plus" className="border invert" style={{ '--stroke-width': 2 }} />
              </g>
            </Icon>
          </li>

        </ol>

      </div>
    </>
  )
}

export default Icons;