// Import the SNBI objects that were created to mimic the items in the manual
// import {objSNBI} from "./snbi.mjs";
// Export a copy of the objSNBI with updated fields that hold a bridge assets actual values.
// export {objAssetData};

// This is only for adding asset data to the SNBI object

// fetch asset values and add them to the objAssetData array
const objAssetData = objSNBI;
objAssetData[0].BID01.numeric_value = `021130`; // Bridge Number
objAssetData[0].BID02.numeric_value = `058-03-05885 C`; // Bridge Name
objAssetData[0].BL01.numeric_value = `18`; // State
objAssetData[0].BL02.numeric_value = `03`; // County
objAssetData[0].BL04.numeric_value = `05`; // Seymour
objAssetData[0].BSP02.numeric_value = `0002`; // Spans
objAssetData[0].BSP03.numeric_value = `009`; // Beams
objAssetData[0].BSP04.code = `C03`; // Span Material
objAssetData[0].BSP06.code = `B02`; // Span Type
objAssetData[0].BSP09.code = `C01`; // Deck Material and Type
objAssetData[0].BSP10.code = `C03`; // Wearing Surface = Latex
objAssetData[0].BSP11.code = `0`; // Deck Protective System
objAssetData[0].BSB01.code = `A01, P01`; // Substructure Config
objAssetData[0].BSB02.code = `2, 1`; // SubNumber
objAssetData[0].BRH01.code = `AYY`; // Rail
objAssetData[0].BRH02.code = `AYY`; // Rail Transition
objAssetData[0].BIE01.code = `2`; // Routine
objAssetData[0].BIE02.numeric_value = `20240103`; // Begin
objAssetData[0].BIE03.numeric_value = `20240103`; // Completion
objAssetData[0].BIE04.code = `IN000422`; // Nationally Certified Bridge Inspector
objAssetData[0].BIE05.numeric_value = `24`; // Frequency
objAssetData[0].BIE06.numeric_value = `20260103`; // Due
objAssetData[0].BIE12.code = `AN`; // No access Equipment
objAssetData[0].BC01.condition_rating = `6`; // Deck
objAssetData[0].BC01.condition_comment = `The deck underside is concealed by box beams and the top of the deck by an epoxy overlay. There is minor leaking and staining between the box beams which indicates that water is moving through the deck. There is heavy efflorescence between Beams 1 and 2 at Pier 2 in both spans. The downspouts have corroded away and are flush with the bottom of the box beams. `; // Deck
objAssetData[0].BC02.condition_rating = `7`; // Super
objAssetData[0].BC02.condition_comment = `There is a shallow-depth, 3" spall with exposed reinforcing steel, midspan of Beam 6 in Span B. There is a minor, 4” crack in Beam 7 in Span B, 10' from the east abutment. There is heavy efflorescence between Beams 1 and 2 near Pier 2 in both spans. This efflorescence is building up on the pier. `; // Super
objAssetData[0].BC03.condition_rating = `6`; // Sub
objAssetData[0].BC03.condition_comment = `There is light spalling and moderate abrasion in the abutments. There is minor spalling with exposed rebar in the top of the south nose of Pier 2 outside of the beam lines. There are several, minor-width, vertical cracks in the abutments and interior pier. The efflorescence on Pier 2 is from the superstructure. There is no scour present. `; // Sub
objAssetData[0].BC04.condition_rating = `N`; // Culvert
objAssetData[0].BC04.condition_comment = ``; // Culvert
objAssetData[0].BC05.condition_rating = `7`; // Bridge Railing
objAssetData[0].BC05.condition_comment = `The posts are well anchored. `; // Bridge Railing
objAssetData[0].BC06.condition_rating = `7`; // Bridge Railing Transitions
objAssetData[0].BC06.condition_comment = `There is minor displacement in the transitions. `; // Bridge Railing Transitions
objAssetData[0].BC07.condition_rating = `N`; // Bearings
objAssetData[0].BC07.condition_comment = ``; // Bearings
objAssetData[0].BC07.code = `N`; // Bearings
objAssetData[0].BC08.condition_rating = `N`; // Joints
objAssetData[0].BC08.condition_comment = ``; // Joints
objAssetData[0].BC08.code = `N`; // Joints
objAssetData[0].BC09.condition_rating = `7`; // Channel
objAssetData[0].BC09.condition_comment = `The west abutment and interior pier are well protected by designed riprap. Under normal conditions the shallow, low-velocity channel flows from north to south through Span A. Span B provides overflow. `; // Channel
objAssetData[0].BC10.condition_rating = `7`; // Channel Protection
objAssetData[0].BC10.condition_comment = `Scour countermeasures were placed in the form of designed riprap under Contract B-31804 Des # 0810402 in 2011. `; // Channel Protection
objAssetData[0].BC11.condition_rating = `7`; // Scour
objAssetData[0].BC11.condition_comment = `The structure is on spread footings. Designed riprap was placed around the footers under Contract B-31804 Des 0810402. The countermeasures are in good condition. `; // Scour
objAssetData[0].BC12.code = `F`; // Bridge Condition
objAssetData[0].BC13.code = `6`; // Lowest Condition
objAssetData[0].BC14.condition_rating = `N`; // NSTM Condition
objAssetData[0].BC14.condition_comment = ``; // NSTM Condition
objAssetData[0].BC15.condition_rating = `N`; // Underwater Condition
objAssetData[0].BC15.condition_comment = ``; // Underwater Condition
objAssetData[0].BAP01.code = `G`; // Roadway Alignment
objAssetData[0].BAP01.comment = `No speed reduction necessary.`; // Roadway Alignment
objAssetData[0].BAP02.code = `6`; // Overtopping Likelihood
objAssetData[0].BAP02.comment = ``; // Overtopping Likelihood
objAssetData[0].BAP03.code = `B`; // Scour Vulnerability
objAssetData[0].BAP03.comment = `Scour countermeasures were placed in the form of designed riprap under Contract B-31804 Des # 0810402 in 2011. A scour analysis previously determined the bridge to be hydraulically scour critical. Countermeasures have been installed and field verified. The scour POA is no longer needed. `; // Scour Vulnerability
objAssetData[0].BMAD01.condition_rating = `N`; // Approach Slabs
objAssetData[0].BMAD01.condition_comment = ``; // Approach Slabs
objAssetData[0].BMAD01.code = `Y`; // Approach Slabs
objAssetData[0].BMAD02.condition_rating = `6`; // Wearing Surface
objAssetData[0].BMAD02.condition_comment = `There are patches throughout the eastbound lane with minor deterioration. There is a moderate-width, transverse crack over the interior pier. There are several, minor- to moderate-width, longitudinal cracks in the wearing surface. There is a concrete repair in the north shoulder over the interior pier. `; // Wearing Surface
objAssetData[0].BMAD03.condition_rating = `N`; // Paint
objAssetData[0].BMAD03.condition_comment = ``; // Paint
objAssetData[0].BMAD03.year = `N`; // Paint
objAssetData[0].BMAD04.condition_rating = `N`; // Terminal Joints
objAssetData[0].BMAD04.condition_comment = ``; // Terminal Joints
objAssetData[0].BMAD04.code = `N`; // Terminal Joints
objAssetData[0].BMAD05.condition_rating = `N`; // Slopewalls
objAssetData[0].BMAD05.condition_comment = ``; // Slopewalls
objAssetData[0].BMAD06.code = `N`; // Swallows
objAssetData[0].BMAD06.comment = ``; // Swallows
objAssetData[0].BMAD07.code = `N`; // Bats
objAssetData[0].BMAD07.comment = ``; // Bats

objAssetData[0].Bsummary01.comment = `General Inspection Notes:\nThe structure is in satisfactory condition. The structure is a 2-span, prestressed concrete continuous, multiple box beam design with a concrete cast-in-place deck. The bridge has a latex (or similar additive) concrete wearing surface. The 2004 ADT is 4,396 vpd. The structure is not posted, does not require an element level inspection, and has scour countermeasures installed. All cardinal directions in this report are based on the roadway direction of travel and not compass readings. \n\nMaintenance / Recommendations:\nThere are no open maintenance items.\n\nHistory:\n1928 : New Bridge : DES Unknown - Contract Unknown\n1968 : Rehab A : Replace Superstructure : DES Unknown - Contract MX-7501\n1979 : Bridge Inspection : DES Unknown - Contract 11691\n1980 : Rehab B : Bridge Deck Replacement : DES Unknown - Contract B-12296\n2011 : Rehab C : Scour Protection (Erosion) : DES 0810370 - Contract B-31804\n2024 : Bridge Replacement : DES 1600503 - Contract B-43667, due to let on 10/9/2024\n\nSafety / Access Plan:\nParking on the grass shoulders is possible at the structure. The embankments down to the channel are manageable. The channel is typically shallow enough to work around and enter without additional precautions. `;
