// export {objDropdown}

// Contains SNBI and BIM dropdowns

// The dropdown menus are all written seperately to their respective objRatingForms[i] in the ratingForms.mjs
// They all get their own using ${objRatingForms[i].dropdown} and ${objRatingForms[i].charlist}
// The character list assignment allows you to know what keypresses are allowed
// The dropdown assignment lets you know what dropdown to use
// charlist: objDropdown[0].Scour.charlist,
// dropdown:  {
// drk: objDropdown[0].Scour.drk,
// lght: objDropdown[0].Scour.lght,

// This is the dropdown hierarchy.
// <div class="divDropdown">
//   <span class="spanDropdownRating">G</span> //Rating
//   <p class="pDropdownDescription drk-thm">
//     <span class="spanDropdownCondition drk-thm">GOOD</span> // Span text
//     Text. // P text
//   </p>
// </div>

// To shorten the strings turned these common strings into template literals.
const tlStart = `<div class="divDropdown"><span class="spanDropdownRating">`;
const tlMiddleDrk = `</span><p class="pDropdownDescription drk-thm"><span class="spanDropdownCondition drk-thm">`;
const tlMiddleLght = `</span><p class="pDropdownDescription lght-thm"><span class="spanDropdownCondition lght-thm">`;

// Make dropdowns an object // table 6, table 20, etc.
const objDropdown = [];
objDropdown[0] = {
  Alignment: {
    charlist: `NGFP`,
    drk: `<div class="divDropdownTop divDropdownBorder drk-thm"></div>
      ${tlStart}N${tlMiddleDrk}NOT APPLICABLE</span>The bridge does not carry vehicular traffic and does not have an operating speed.</p></div>
      ${tlStart}G${tlMiddleDrk}GOOD</span>The operating speed at the bridge is no different than the rest of the highway segment.</p></div>
      ${tlStart}F${tlMiddleDrk}FAIR</span>The operating speed at the bridge is noticeably different compared to the rest of the highway segment.</p></div>
      ${tlStart}P${tlMiddleDrk}POOR</span>The operating speed at the bridge is substantially different compared to the rest of the highway segment.</p></div>
      <div class="divDropdownBottom divDropdownBorder drk-thm"></div>
      `,
    lght: `<div class="divDropdownTop divDropdownBorder lght-thm"></div>
      ${tlStart}N${tlMiddleLght}NOT APPLICABLE</span>The bridge does not carry vehicular traffic and does not have an operating speed.</p></div>
      ${tlStart}G${tlMiddleLght}GOOD</span>The operating speed at the bridge is no different than the rest of the highway segment.</p></div>
      ${tlStart}F${tlMiddleLght}FAIR</span>The operating speed at the bridge is noticeably different compared to the rest of the highway segment.</p></div>
      ${tlStart}P${tlMiddleLght}POOR</span>The operating speed at the bridge is substantially different compared to the rest of the highway segment.</p></div>
      <div class="divDropdownBottom divDropdownBorder lght-thm"></div>
      `,
  },

  TermJoints: {
    charlist: `NGFP`,
    drk: `<div class="divDropdownTop divDropdownBorder drk-thm"></div>
      ${tlStart}N${tlMiddleDrk}NOT APPLICABLE</span>The bridge abutments are not integral or semi-integral. The bridge does not have terminal joints.</p></div>
      ${tlStart}G${tlMiddleDrk}GOOD</span>The terminal joints do not need maintenance, and meet the current standards.</p></div>
      ${tlStart}F${tlMiddleDrk}FAIR</span>The terminal joints do not need maintenance, but do not meet the current standards.</p></div>
      ${tlStart}P${tlMiddleDrk}POOR</span>The terminal joints need maintenance.</p></div>
      <div class="divDropdownBottom divDropdownBorder drk-thm"></div>`,
    lght: `<div class="divDropdownTop divDropdownBorder lght-thm"></div>
      ${tlStart}N${tlMiddleLght}NOT APPLICABLE</span>The bridge abutments are not integral or semi-integral. The bridge does not have terminal joints.</p></div>
      ${tlStart}G${tlMiddleLght}GOOD</span>The terminal joints do not need maintenance, and meet the current standards.</p></div>
      ${tlStart}F${tlMiddleLght}FAIR</span>The terminal joints do not need maintenance, but do not meet the current standards.</p></div>
      ${tlStart}P${tlMiddleLght}POOR</span>The terminal joints need maintenance.</p></div>
      <div class="divDropdownBottom divDropdownBorder lght-thm"></div>`,
  },

  Joints: {
    charlist: `N9876543210`,
    drk: `
      <div class="divDropdownTop divDropdownBorder drk-thm"></div>
      ${tlStart}N${tlMiddleDrk}NOT APPLICABLE</span>Bridge does not have deck joints.</p></div>
      ${tlStart}9${tlMiddleDrk}EXCELLENT</span>Isolated inherent defects.</p></div>
      ${tlStart}8${tlMiddleDrk}VERY GOOD</span>Some inherent defects.</p></div>
      ${tlStart}7${tlMiddleDrk}GOOD</span>Some minor defects.</p></div>
      ${tlStart}6${tlMiddleDrk}SATISFACTORY</span>Widespread minor or isolated moderate defects.</p></div>
      ${tlStart}5${tlMiddleDrk}FAIR</span>Some moderate defects.</p></div>
      ${tlStart}4${tlMiddleDrk}POOR</span>Widespread moderate or isolated major defects.</p></div>
      ${tlStart}3${tlMiddleDrk}SERIOUS</span>Some major defects.</p></div>
      ${tlStart}2${tlMiddleDrk}CRITICAL</span>Widespread major defects.</p></div>
      ${tlStart}1${tlMiddleDrk}IMMINENT FAILURE</span>Joints have failed and are ineffective.</p></div>
      ${tlStart}0${tlMiddleDrk}FAILED</span>Joints have failed and present a safety hazard.</p></div>
      <div class="divDropdownBottom divDropdownBorder drk-thm"></div>
      `,
    lght: `
      <div class="divDropdownTop divDropdownBorder drk-thm"></div>
      ${tlStart}N${tlMiddleLght}NOT APPLICABLE</span>Bridge does not have deck joints.</p></div>
      ${tlStart}9${tlMiddleLght}EXCELLENT</span>Isolated inherent defects.</p></div>
      ${tlStart}8${tlMiddleLght}VERY GOOD</span>Some inherent defects.</p></div>
      ${tlStart}7${tlMiddleLght}GOOD</span>Some minor defects.</p></div>
      ${tlStart}6${tlMiddleLght}SATISFACTORY</span>Widespread minor or isolated moderate defects.</p></div>
      ${tlStart}5${tlMiddleLght}FAIR</span>Some moderate defects.</p></div>
      ${tlStart}4${tlMiddleLght}POOR</span>Widespread moderate or isolated major defects.</p></div>
      ${tlStart}3${tlMiddleLght}SERIOUS</span>Some major defects.</p></div>
      ${tlStart}2${tlMiddleLght}CRITICAL</span>Widespread major defects.</p></div>
      ${tlStart}1${tlMiddleLght}IMMINENT FAILURE</span>Joints have failed and are ineffective.</p></div>
      ${tlStart}0${tlMiddleLght}FAILED</span>Joints have failed and present a safety hazard.</p></div>
      <div class="divDropdownBottom divDropdownBorder drk-thm"></div>
      `,
  },

  Table20: {
    charlist: `N9876543210`,
    drk: `
      <div class="divDropdownTop divDropdownBorder drk-thm"></div>
      ${tlStart}N${tlMiddleDrk}NOT APPLICABLE</span>Component does not exist.</p></div>
      ${tlStart}9${tlMiddleDrk}EXCELLENT</span>Isolated inherent defects.</p></div>
      ${tlStart}8${tlMiddleDrk}VERY GOOD</span>Some inherent defects.</p></div>
      ${tlStart}7${tlMiddleDrk}GOOD</span>Some minor defects.</p></div>
      ${tlStart}6${tlMiddleDrk}SATISFACTORY</span>Widespread minor or isolated moderate defects.</p></div>
      ${tlStart}5${tlMiddleDrk}FAIR</span>Some moderate defects; strength and performance of the component are not affected.</p></div>
      ${tlStart}4${tlMiddleDrk}POOR</span>Widespread moderate or isolated major defects; strength and/or performance of the component is affected.</p></div>
      ${tlStart}3${tlMiddleDrk}SERIOUS</span>Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.</p></div>
      ${tlStart}2${tlMiddleDrk}CRITICAL</span>Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.</p></div>
      ${tlStart}1${tlMiddleDrk}IMMINENT FAILURE</span>Bridge is closed to traffic due to component condition. Repair or rehabilitation may return the bridge to service.</p></div>
      ${tlStart}0${tlMiddleDrk}FAILED</span>Bridge is closed due to component condition, and is beyond corrective action. Replacement is required to restore service.</p></div>
      <div class="divDropdownBottom divDropdownBorder drk-thm"></div>
      `,
    lght: `
      <div class="divDropdownTop divDropdownBorder lght-thm"></div>
      ${tlStart}N${tlMiddleLght}NOT APPLICABLE</span>Component does not exist.</p></div>
      ${tlStart}9${tlMiddleLght}EXCELLENT</span>Isolated inherent defects.</p></div>
      ${tlStart}8${tlMiddleLght}VERY GOOD</span>Some inherent defects.</p></div>
      ${tlStart}7${tlMiddleLght}GOOD</span>Some minor defects.</p></div>
      ${tlStart}6${tlMiddleLght}SATISFACTORY</span>Widespread minor or isolated moderate defects.</p></div>
      ${tlStart}5${tlMiddleLght}FAIR</span>Some moderate defects; strength and performance of the component are not affected.</p></div>
      ${tlStart}4${tlMiddleLght}POOR</span>Widespread moderate or isolated major defects; strength and/or performance of the component is affected.</p></div>
      ${tlStart}3${tlMiddleLght}SERIOUS</span>Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.</p></div>
      ${tlStart}2${tlMiddleLght}CRITICAL</span>Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.</p></div>
      ${tlStart}1${tlMiddleLght}IMMINENT FAILURE</span>Bridge is closed to traffic due to component condition. Repair or rehabilitation may return the bridge to service.</p></div>
      ${tlStart}0${tlMiddleLght}FAILED</span>Bridge is closed due to component condition, and is beyond corrective action. Replacement is required to restore service.</p></div>
      <div class="divDropdownBottom divDropdownBorder lght-thm"></div>
      `,
  },

  Table20less: {
    charlist: `N9876543`,
    drk: `
      <div class="divDropdownTop divDropdownBorder drk-thm"></div>
      ${tlStart}N${tlMiddleDrk}NOT APPLICABLE</span>Component does not exist.</p></div>
      ${tlStart}9${tlMiddleDrk}EXCELLENT</span>Isolated inherent defects.</p></div>
      ${tlStart}8${tlMiddleDrk}VERY GOOD</span>Some inherent defects.</p></div>
      ${tlStart}7${tlMiddleDrk}GOOD</span>Some minor defects.</p></div>
      ${tlStart}6${tlMiddleDrk}SATISFACTORY</span>Widespread minor or isolated moderate defects.</p></div>
      ${tlStart}5${tlMiddleDrk}FAIR</span>Some moderate defects.</p></div>
      ${tlStart}4${tlMiddleDrk}POOR</span>Widespread moderate or isolated major defects.</p></div>
      ${tlStart}3${tlMiddleDrk}SERIOUS</span>Some major defects.</p></div>
      <div class="divDropdownBottom divDropdownBorder drk-thm"></div>
      `,
    lght: `
      <div class="divDropdownTop divDropdownBorder lght-thm"></div>
      ${tlStart}N${tlMiddleLght}NOT APPLICABLE</span>Component does not exist.</p></div>
      ${tlStart}9${tlMiddleLght}EXCELLENT</span>Isolated inherent defects.</p></div>
      ${tlStart}8${tlMiddleLght}VERY GOOD</span>Some inherent defects.</p></div>
      ${tlStart}7${tlMiddleLght}GOOD</span>Some minor defects.</p></div>
      ${tlStart}6${tlMiddleLght}SATISFACTORY</span>Widespread minor or isolated moderate defects.</p></div>
      ${tlStart}5${tlMiddleLght}FAIR</span>Some moderate defects.</p></div>
      ${tlStart}4${tlMiddleLght}POOR</span>Widespread moderate or isolated major defects.</p></div>
      ${tlStart}3${tlMiddleLght}SERIOUS</span>Some major defects.</p></div>
      <div class="divDropdownBottom divDropdownBorder lght-thm"></div>
      `,
  },

  Paint: {
    charlist: `N9876543210`,
    drk: `
      <div class="divDropdownTop divDropdownBorder drk-thm"></div>
      ${tlStart}N${tlMiddleDrk}NOT APPLICABLE</span>Component does not exist.</p></div>
      ${tlStart}9${tlMiddleDrk}EXCELLENT</span>Newly painted.</p></div>
      ${tlStart}8${tlMiddleDrk}VERY GOOD</span>There is very minor surface dulling.</p></div>
      ${tlStart}7${tlMiddleDrk}GOOD</span>There is minor chalking and surface dulling.</p></div>
      ${tlStart}6${tlMiddleDrk}SATISFACTORY</span>There are minor areas of rust and chalking.</p></div>
      ${tlStart}5${tlMiddleDrk}FAIR</span>There are areas of light rust and minor peeling.</p></div>
      ${tlStart}4${tlMiddleDrk}POOR</span>There are large areas of light rust and peeling with some pitting.</p></div>
      ${tlStart}3${tlMiddleDrk}SERIOUS</span>There is greater than 40% loss of paint and large areas of section loss.</p></div>
      ${tlStart}2${tlMiddleDrk}CRITICAL</span>There is greater than 60% loss of paint and large areas of measurable section loss.</p></div>
      ${tlStart}1${tlMiddleDrk}IMMINENT FAILURE</span>There is greater than 75% loss of paint and large areas of measurable section loss.</p></div>
      ${tlStart}0${tlMiddleDrk}FAILED</span>The paint has failed and is no longer protecting the bridge.</p></div>
      <div class="divDropdownBottom divDropdownBorder drk-thm"></div>
      `,
    lght: `
      <div class="divDropdownTop divDropdownBorder lght-thm"></div>
      ${tlStart}N${tlMiddleLght}NOT APPLICABLE</span>Component does not exist.</p></div>
      ${tlStart}9${tlMiddleLght}EXCELLENT</span>Newly painted.</p></div>
      ${tlStart}8${tlMiddleLght}VERY GOOD</span>There is very minor surface dulling.</p></div>
      ${tlStart}7${tlMiddleLght}GOOD</span>There is minor chalking and surface dulling.</p></div>
      ${tlStart}6${tlMiddleLght}SATISFACTORY</span>There are minor areas of rust and chalking.</p></div>
      ${tlStart}5${tlMiddleLght}FAIR</span>There are areas of light rust and minor peeling.</p></div>
      ${tlStart}4${tlMiddleLght}POOR</span>There are large areas of light rust and peeling with some pitting.</p></div>
      ${tlStart}3${tlMiddleLght}SERIOUS</span>There is greater than 40% loss of paint and large areas of section loss.</p></div>
      ${tlStart}2${tlMiddleLght}CRITICAL</span>There is greater than 60% loss of paint and large areas of measurable section loss.</p></div>
      ${tlStart}1${tlMiddleLght}IMMINENT FAILURE</span>There is greater than 75% loss of paint and large areas of measurable section loss.</p></div>
      ${tlStart}0${tlMiddleLght}FAILED</span>The paint has failed and is no longer protecting the bridge.</p></div>
      <div class="divDropdownBottom divDropdownBorder lght-thm"></div>
      `,
  },

  Channel: {
    charlist: `N9876543210`,
    drk: `
      <div class="divDropdownTop divDropdownBorder drk-thm"></div>
      ${tlStart}N${tlMiddleDrk}NOT APPLICABLE</span>Bridge does not cross over water.</p></div>
      ${tlStart}9${tlMiddleDrk}EXCELLENT</span>No defects.</p></div>
      ${tlStart}8${tlMiddleDrk}VERY GOOD</span>Inherent defects only.</p></div>
      ${tlStart}7${tlMiddleDrk}GOOD</span>Some minor defects.</p></div>
      ${tlStart}6${tlMiddleDrk}SATISFACTORY</span>Widespread minor or isolated moderate defects.</p></div>
      ${tlStart}5${tlMiddleDrk}FAIR</span>Moderate defects; bridge and approach roadway are not threatened.</p></div>
      ${tlStart}4${tlMiddleDrk}POOR</span>Widespread moderate or isolated major defects; bridge and/or approach roadway is threatened.</p></div>
      ${tlStart}3${tlMiddleDrk}SERIOUS</span>Major defects; bridge or approach roadway is seriously threatened. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.</p></div>
      ${tlStart}2${tlMiddleDrk}CRITICAL</span>Major defects. Bridge or approach roadway is severely threatened. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.</p></div>
      ${tlStart}1${tlMiddleDrk}IMMINENT FAILURE</span>Bridge is closed to traffic due to channel condition. Channel rehabilitation may return the bridge to service.</p></div>
      ${tlStart}0${tlMiddleDrk}FAILED</span>Bridge is closed due to channel condition, and is beyond corrective action. Bridge location or design can no longer accommodate the channel, and bridge replacement is needed to restore service.</p></div>
      <div class="divDropdownBottom divDropdownBorder drk-thm"></div>
      `,
    lght: `
      <div class="divDropdownTop divDropdownBorder lght-thm"></div>
      ${tlStart}N${tlMiddleLght}NOT APPLICABLE</span>Bridge does not cross over water.</p></div>
      ${tlStart}9${tlMiddleLght}EXCELLENT</span>No defects.</p></div>
      ${tlStart}8${tlMiddleLght}VERY GOOD</span>Inherent defects only.</p></div>
      ${tlStart}7${tlMiddleLght}GOOD</span>Some minor defects.</p></div>
      ${tlStart}6${tlMiddleLght}SATISFACTORY</span>Widespread minor or isolated moderate defects.</p></div>
      ${tlStart}5${tlMiddleLght}FAIR</span>Moderate defects; bridge and approach roadway are not threatened.</p></div>
      ${tlStart}4${tlMiddleLght}POOR</span>Widespread moderate or isolated major defects; bridge and/or approach roadway is threatened.</p></div>
      ${tlStart}3${tlMiddleLght}SERIOUS</span>Major defects; bridge or approach roadway is seriously threatened. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.</p></div>
      ${tlStart}2${tlMiddleLght}CRITICAL</span>Major defects. Bridge or approach roadway is severely threatened. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.</p></div>
      ${tlStart}1${tlMiddleLght}IMMINENT FAILURE</span>Bridge is closed to traffic due to channel condition. Channel rehabilitation may return the bridge to service.</p></div>
      ${tlStart}0${tlMiddleLght}FAILED</span>Bridge is closed due to channel condition, and is beyond corrective action. Bridge location or design can no longer accommodate the channel, and bridge replacement is needed to restore service.</p></div>
      <div class="divDropdownBottom divDropdownBorder lght-thm"></div>
      `,
  },

  ChannelPro: {
    charlist: `N9876543210`,
    drk: `
      <div class="divDropdownTop divDropdownBorder drk-thm"></div>
      ${tlStart}N${tlMiddleDrk}NOT APPLICABLE</span>Bridge does not cross over water or channel protection devices do not exist.</p></div>
      ${tlStart}9${tlMiddleDrk}EXCELLENT</span>Isolated inherent defects.</p></div>
      ${tlStart}8${tlMiddleDrk}VERY GOOD</span>Some minor defects.</p></div>
      ${tlStart}7${tlMiddleDrk}GOOD</span>Some minor defects.</p></div>
      ${tlStart}6${tlMiddleDrk}SATISFACTORY</span>Widespread minor or isolated moderate defects.</p></div>
      ${tlStart}5${tlMiddleDrk}FAIR</span>Some moderate defects; performance of the channel protection is not affected.</p></div>
      ${tlStart}4${tlMiddleDrk}POOR</span>Widespread moderate or isolated major defects; performance of channel protection is affected.</p></div>
      ${tlStart}3${tlMiddleDrk}SERIOUS</span>Major defects; performance of channel protection is seriously affected. Condition typically necessitates more frequent monitoring or corrective actions.</p></div>
      ${tlStart}2${tlMiddleDrk}CRITICAL</span>Major defects; channel protection is severely compromised. Condition typically necessitates more frequent monitoring or corrective actions.</p></div>
      ${tlStart}1${tlMiddleDrk}IMMINENT FAILURE</span>Channel protection has failed, but corrective action could restore it to working condition.</p></div>
      ${tlStart}0${tlMiddleDrk}FAILED</span>Channel protection is beyond repair and must be replaced.</p></div>
      <div class="divDropdownBottom divDropdownBorder drk-thm"></div>
      `,
    lght: `
      <div class="divDropdownTop divDropdownBorder lght-thm"></div>
      ${tlStart}N${tlMiddleLght}NOT APPLICABLE</span>Bridge does not cross over water or channel protection devices do not exist.</p></div>
      ${tlStart}9${tlMiddleLght}EXCELLENT</span>Isolated inherent defects.</p></div>
      ${tlStart}8${tlMiddleLght}VERY GOOD</span>Some minor defects.</p></div>
      ${tlStart}7${tlMiddleLght}GOOD</span>Some minor defects.</p></div>
      ${tlStart}6${tlMiddleLght}SATISFACTORY</span>Widespread minor or isolated moderate defects.</p></div>
      ${tlStart}5${tlMiddleLght}FAIR</span>Some moderate defects; performance of the channel protection is not affected.</p></div>
      ${tlStart}4${tlMiddleLght}POOR</span>Widespread moderate or isolated major defects; performance of channel protection is affected.</p></div>
      ${tlStart}3${tlMiddleLght}SERIOUS</span>Major defects; performance of channel protection is seriously affected. Condition typically necessitates more frequent monitoring or corrective actions.</p></div>
      ${tlStart}2${tlMiddleLght}CRITICAL</span>Major defects; channel protection is severely compromised. Condition typically necessitates more frequent monitoring or corrective actions.</p></div>
      ${tlStart}1${tlMiddleLght}IMMINENT FAILURE</span>Channel protection has failed, but corrective action could restore it to working condition.</p></div>
      ${tlStart}0${tlMiddleLght}FAILED</span>Channel protection is beyond repair and must be replaced.</p></div>
      <div class="divDropdownBottom divDropdownBorder lght-thm"></div>
      `,
  },

  Overtopping: {
    charlist: `N0123456`,
    drk: `
      <div class="divDropdownTop divDropdownBorder drk-thm"></div>
      ${tlStart}N${tlMiddleDrk}NOT APPLICABLE</span>Bridge does not cross over water.</p></div>
      ${tlStart}0${tlMiddleDrk}NEVER</span>The bridge is never overtopped.</p></div>
      ${tlStart}1${tlMiddleDrk}REMOTE</span>Once every 100 years or less frequently.</p></div>
      ${tlStart}2${tlMiddleDrk}VERY LOW</span>Once every 51 to 99 years.</p></div>
      ${tlStart}3${tlMiddleDrk}LOW</span>Once every 26 to 50 years.</p></div>
      ${tlStart}4${tlMiddleDrk}MODERATE</span>Once every 11 to 25 years.</p></div>
      ${tlStart}5${tlMiddleDrk}HIGH</span>Once every 3 to 10 years.</p></div>
      ${tlStart}6${tlMiddleDrk}VERY HIGH</span>Once every 2 years or more frequently.</p></div>
      <div class="divDropdownBottom divDropdownBorder drk-thm"></div>
      `,
    lght: `
      <div class="divDropdownTop divDropdownBorder lght-thm"></div>
      ${tlStart}N${tlMiddleLght}NOT APPLICABLE</span>Bridge does not cross over water.</p></div>
      ${tlStart}0${tlMiddleLght}NEVER</span>The bridge is never overtopped.</p></div>
      ${tlStart}1${tlMiddleLght}REMOTE</span>Once every 100 years or less frequently.</p></div>
      ${tlStart}2${tlMiddleLght}VERY LOW</span>Once every 51 to 99 years.</p></div>
      ${tlStart}3${tlMiddleLght}LOW</span>Once every 26 to 50 years.</p></div>
      ${tlStart}4${tlMiddleLght}MODERATE</span>Once every 11 to 25 years.</p></div>
      ${tlStart}5${tlMiddleLght}HIGH</span>Once every 3 to 10 years.</p></div>
      ${tlStart}6${tlMiddleLght}VERY HIGH</span>Once every 2 years or more frequently.</p></div>
      <div class="divDropdownBottom divDropdownBorder lght-thm"></div>
      `,
  },

  Scour: {
    charlist: `N9876543210`,
    drk: `
      <div class="divDropdownTop divDropdownBorder drk-thm"></div>
      ${tlStart}N${tlMiddleDrk}NOT APPLICABLE</span>Bridge does not cross over water.</p></div>
      ${tlStart}9${tlMiddleDrk}EXCELLENT</span>No scour.</p></div>
      ${tlStart}8${tlMiddleDrk}VERY GOOD</span>Insignificant scour.</p></div>
      ${tlStart}7${tlMiddleDrk}GOOD</span>Some minor scour.</p></div>
      ${tlStart}6${tlMiddleDrk}SATISFACTORY</span>Widespread minor or isolated moderate scour.</p></div>
      ${tlStart}5${tlMiddleDrk}FAIR</span>Moderate scour; strength and stability of the bridge are not affected.</p></div>
      ${tlStart}4${tlMiddleDrk}POOR</span>Widespread moderate or isolated major scour; strength and/or stability of the bridge is affected.</p></div>
      ${tlStart}3${tlMiddleDrk}SERIOUS</span>Major scour; strength and/or stability of the bridge is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.</p></div>
      ${tlStart}2${tlMiddleDrk}CRITICAL</span>Major scour; strength and/or stability of the bridge is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions to keep the bridge open.</p></div>
      ${tlStart}1${tlMiddleDrk}IMMINENT FAILURE</span>Bridge is closed to traffic due to scour condition. Channel rehabilitation may return the bridge to service.</p></div>
      ${tlStart}0${tlMiddleDrk}FAILED</span>Bridge is closed due to scour condition, and is beyond corrective action. Bridge replacement is needed to restore service.</p></div>
      <div class="divDropdownBottom divDropdownBorder drk-thm"></div>
      `,
    lght: `
      <div class="divDropdownTop divDropdownBorder lght-thm"></div>
      ${tlStart}N${tlMiddleLght}NOT APPLICABLE</span>Bridge does not cross over water.</p></div>
      ${tlStart}9${tlMiddleLght}EXCELLENT</span>No scour.</p></div>
      ${tlStart}8${tlMiddleLght}VERY GOOD</span>Insignificant scour.</p></div>
      ${tlStart}7${tlMiddleLght}GOOD</span>Some minor scour.</p></div>
      ${tlStart}6${tlMiddleLght}SATISFACTORY</span>Widespread minor or isolated moderate scour.</p></div>
      ${tlStart}5${tlMiddleLght}FAIR</span>Moderate scour; strength and stability of the bridge are not affected.</p></div>
      ${tlStart}4${tlMiddleLght}POOR</span>Widespread moderate or isolated major scour; strength and/or stability of the bridge is affected.</p></div>
      ${tlStart}3${tlMiddleLght}SERIOUS</span>Major scour; strength and/or stability of the bridge is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.</p></div>
      ${tlStart}2${tlMiddleLght}CRITICAL</span>Major scour; strength and/or stability of the bridge is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions to keep the bridge open.</p></div>
      ${tlStart}1${tlMiddleLght}IMMINENT FAILURE</span>Bridge is closed to traffic due to scour condition. Channel rehabilitation may return the bridge to service.</p></div>
      ${tlStart}0${tlMiddleLght}FAILED</span>Bridge is closed due to scour condition, and is beyond corrective action. Bridge replacement is needed to restore service.</p></div>
      <div class="divDropdownBottom divDropdownBorder lght-thm"></div>
      `,
  },

  Vulnerability: {
    charlist: `N9876543210`,
    drk: `
      <div class="divDropdownTop divDropdownBorder drk-thm"></div>
      ${tlStart}0${tlMiddleDrk}NOT COMPLETE</span>Scour appraisal has not been completed.</p></div>
      ${tlStart}A${tlMiddleDrk}STABLE</span>Scour appraisal completed. Bridge determined to be stable for scour. </p></div>
      ${tlStart}B${tlMiddleDrk}COUNTERMEASURES</span>Scour appraisal completed. Bridge determined to be stable for scour, dependent upon designed, and functioning countermeasures. </p></div>
      ${tlStart}C${tlMiddleDrk}TEMPORARY COUNTERMEASURES</span>Scour appraisal completed. Bridge could become unstable for scour. Temporary (not designed) countermeasure installed to mitigate scour. Bridge is scour critical.</p></div>
      ${tlStart}D${tlMiddleDrk}UNSTABLE</span>Scour appraisal completed. Bridge is, or may become, unstable for scour. Bridge is scour critical.</p></div>
      ${tlStart}E${tlMiddleDrk}NOT COMPLETED</span>Scour appraisal has not been completed. Temporary (not designed) countermeasure installed to mitigate scour.</p></div>
      ${tlStart}U${tlMiddleDrk}UNKNOWN</span>Scour appraisal has not been completed due to unknown foundations.</p></div>
      <div class="divDropdownBottom divDropdownBorder drk-thm"></div>
      `,
    lght: `
      <div class="divDropdownTop divDropdownBorder lght-thm"></div>
      ${tlStart}0${tlMiddleLght}NOT COMPLETE</span>Scour appraisal has not been completed.</p></div>
      ${tlStart}A${tlMiddleLght}STABLE</span>Scour appraisal completed. Bridge determined to be stable for scour. </p></div>
      ${tlStart}B${tlMiddleLght}COUNTERMEASURES</span>Scour appraisal completed. Bridge determined to be stable for scour, dependent upon designed, and functioning countermeasures. </p></div>
      ${tlStart}C${tlMiddleLght}TEMPORARY COUNTERMEASURES</span>Scour appraisal completed. Bridge could become unstable for scour. Temporary (not designed) countermeasure installed to mitigate scour. Bridge is scour critical.</p></div>
      ${tlStart}D${tlMiddleLght}UNSTABLE</span>Scour appraisal completed. Bridge is, or may become, unstable for scour. Bridge is scour critical.</p></div>
      ${tlStart}E${tlMiddleLght}NOT COMPLETED</span>Scour appraisal has not been completed. Temporary (not designed) countermeasure installed to mitigate scour.</p></div>
      ${tlStart}U${tlMiddleLght}UNKNOWN</span>Scour appraisal has not been completed due to unknown foundations.</p></div>
      <div class="divDropdownBottom divDropdownBorder lght-thm"></div>
      `,
  },

  Slopewalls: {
    charlist: `NGP`,
    drk: `<div class="divDropdownTop divDropdownBorder drk-thm"></div>
      ${tlStart}N${tlMiddleDrk}NOT APPLICABLE</span>Bridge does not have slopewalls.</p></div>
      ${tlStart}G${tlMiddleDrk}GOOD</span>Some minor defects.</p></div>
      ${tlStart}P${tlMiddleDrk}POOR</span>Widespread moderate or isolated major defects.</p></div>
      <div class="divDropdownBottom divDropdownBorder drk-thm"></div>`,
    lght: `<div class="divDropdownTop divDropdownBorder lght-thm"></div>
      ${tlStart}N${tlMiddleLght}NOT APPLICABLE</span>Bridge does not have slopewalls.</p></div>
      ${tlStart}G${tlMiddleLght}GOOD</span>Some minor defects.</p></div>
      ${tlStart}P${tlMiddleLght}POOR</span>Widespread moderate or isolated major defects.</p></div>
      <div class="divDropdownBottom divDropdownBorder lght-thm"></div>`,
  },

  Swallows: {
    charlist: `NY`,
    drk: `<div class="divDropdownTop divDropdownBorder drk-thm"></div>
      ${tlStart}N${tlMiddleDrk}NO</span>No swallows or nests were observed.</p></div>
      ${tlStart}Y${tlMiddleDrk}YES</span>Swallows and/or nests were observed.</p></div>
      <div class="divDropdownBottom divDropdownBorder drk-thm"></div>`,
    lght: `<div class="divDropdownTop divDropdownBorder lght-thm"></div>
      ${tlStart}N${tlMiddleLght}NO</span>No swallows or nests were observed.</p></div>
      ${tlStart}Y${tlMiddleLght}YES</span>Swallows and/or nests were observed.</p></div>
      <div class="divDropdownBottom divDropdownBorder lght-thm"></div>`,
  },

  Bats: {
    charlist: `NYH`,
    drk: `<div class="divDropdownTop divDropdownBorder drk-thm"></div>
      ${tlStart}N${tlMiddleDrk}NO</span>No bats were seen or heard.</p></div>
      ${tlStart}Y${tlMiddleDrk}YES</span>Bats and/or guano were observed.</p></div>
      ${tlStart}H${tlMiddleDrk}HEARD</span>Bats heard nesting at bridge or inside bridge components.</p></div>
      <div class="divDropdownBottom divDropdownBorder drk-thm"></div>`,
    lght: `<div class="divDropdownTop divDropdownBorder lght-thm"></div>
      ${tlStart}N${tlMiddleLght}NO</span>No bats were seen or heard.</p></div>
      ${tlStart}Y${tlMiddleLght}YES</span>Bats and/or guano were observed.</p></div>
      ${tlStart}H${tlMiddleLght}HEARD</span>Bats heard nesting at bridge or inside bridge components.</p></div>
      <div class="divDropdownBottom divDropdownBorder lght-thm"></div>`,
  },
};
