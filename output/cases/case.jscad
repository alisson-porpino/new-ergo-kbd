function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[196.0965823,-98.5106349],"radius":2.5})
.union(
    CAG.circle({"center":[177.25,-57.2725],"radius":2.5})
).union(
    CAG.circle({"center":[151,-90.9975],"radius":2.5})
).union(
    CAG.circle({"center":[125,-58.475],"radius":2.5})
).union(
    CAG.circle({"center":[117,-101.475],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[196.0965823,-98.5106349],"radius":1.5})
.union(
    CAG.circle({"center":[177.25,-57.2725],"radius":1.5})
).union(
    CAG.circle({"center":[151,-90.9975],"radius":1.5})
).union(
    CAG.circle({"center":[125,-58.475],"radius":1.5})
).union(
    CAG.circle({"center":[117,-101.475],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function big_base_layout_extrude_1_outline_fn(){
    return new CSG.Path2D([[89,-112],[111,-112]]).appendArc([112,-111],{"radius":1,"clockwise":false,"large":false}).appendPoint([112,-109.275]).appendArc([112.7,-108.575],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([121.3,-108.575]).appendArc([122,-109.275],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([122,-115.475]).appendArc([123,-116.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([145,-116.475]).appendArc([146,-115.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([146,-115.175]).appendArc([146.7,-114.475],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([155,-114.475]).appendArc([156,-115.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([156,-115.775]).appendArc([156.7,-116.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([172,-116.475]).appendArc([173,-117.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([173,-117.775]).appendArc([173.7,-118.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([187.1819227,-118.475]).appendArc([188.1331173,-119.7835916],{"radius":1,"clockwise":true,"large":false}).appendPoint([186.7093618,-124.1654607]).appendArc([187.1587895,-125.0475122],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([208.6526667,-132.0312963]).appendArc([209.5347182,-131.5818686],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([218.9906382,-102.4795393]).appendArc([218.5412105,-101.5974878],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([215.9836881,-100.7664984]).appendArc([215.5,-100.1007588],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([215.5,-32.2225]).appendArc([214.8,-31.5225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([197.7,-31.5225]).appendArc([197,-30.8225],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([197,-27.5225]).appendArc([196,-26.5225],{"radius":1,"clockwise":false,"large":false}).appendPoint([181,-26.5225]).appendArc([180,-25.5225],{"radius":1,"clockwise":true,"large":false}).appendPoint([180,-25.3175]).appendArc([179.3,-24.6175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([164,-24.6175]).appendArc([163,-23.6175],{"radius":1,"clockwise":true,"large":false}).appendPoint([163,-17.9975]).appendArc([162,-16.9975],{"radius":1,"clockwise":false,"large":false}).appendPoint([140,-16.9975]).appendArc([139,-17.9975],{"radius":1,"clockwise":false,"large":false}).appendPoint([139,-20.76]).appendArc([138,-21.76],{"radius":1,"clockwise":true,"large":false}).appendPoint([123,-21.76]).appendArc([122,-22.76],{"radius":1,"clockwise":false,"large":false}).appendPoint([122,-26.475]).appendArc([121,-27.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([106,-27.475]).appendArc([105,-28.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([105,-36]).appendArc([104,-37],{"radius":1,"clockwise":true,"large":false}).appendPoint([89,-37]).appendArc([88,-38],{"radius":1,"clockwise":false,"large":false}).appendPoint([88,-111]).appendArc([89,-112],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function big_base_layout_extrude_4_outline_fn(){
    return new CSG.Path2D([[89,-112],[111,-112]]).appendArc([112,-111],{"radius":1,"clockwise":false,"large":false}).appendPoint([112,-109.275]).appendArc([112.7,-108.575],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([121.3,-108.575]).appendArc([122,-109.275],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([122,-115.475]).appendArc([123,-116.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([145,-116.475]).appendArc([146,-115.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([146,-115.175]).appendArc([146.7,-114.475],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([155,-114.475]).appendArc([156,-115.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([156,-115.775]).appendArc([156.7,-116.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([172,-116.475]).appendArc([173,-117.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([173,-117.775]).appendArc([173.7,-118.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([187.1819227,-118.475]).appendArc([188.1331173,-119.7835916],{"radius":1,"clockwise":true,"large":false}).appendPoint([186.7093618,-124.1654607]).appendArc([187.1587895,-125.0475122],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([208.6526667,-132.0312963]).appendArc([209.5347182,-131.5818686],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([218.9906382,-102.4795393]).appendArc([218.5412105,-101.5974878],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([215.9836881,-100.7664984]).appendArc([215.5,-100.1007588],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([215.5,-32.2225]).appendArc([214.8,-31.5225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([197.7,-31.5225]).appendArc([197,-30.8225],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([197,-27.5225]).appendArc([196,-26.5225],{"radius":1,"clockwise":false,"large":false}).appendPoint([181,-26.5225]).appendArc([180,-25.5225],{"radius":1,"clockwise":true,"large":false}).appendPoint([180,-25.3175]).appendArc([179.3,-24.6175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([164,-24.6175]).appendArc([163,-23.6175],{"radius":1,"clockwise":true,"large":false}).appendPoint([163,-17.9975]).appendArc([162,-16.9975],{"radius":1,"clockwise":false,"large":false}).appendPoint([140,-16.9975]).appendArc([139,-17.9975],{"radius":1,"clockwise":false,"large":false}).appendPoint([139,-20.76]).appendArc([138,-21.76],{"radius":1,"clockwise":true,"large":false}).appendPoint([123,-21.76]).appendArc([122,-22.76],{"radius":1,"clockwise":false,"large":false}).appendPoint([122,-26.475]).appendArc([121,-27.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([106,-27.475]).appendArc([105,-28.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([105,-36]).appendArc([104,-37],{"radius":1,"clockwise":true,"large":false}).appendPoint([89,-37]).appendArc([88,-38],{"radius":1,"clockwise":false,"large":false}).appendPoint([88,-111]).appendArc([89,-112],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}


function base_layout_extrude_4_outline_fn(){
    return new CSG.Path2D([[90,-111],[110,-111]]).appendArc([111,-110],{"radius":1,"clockwise":false,"large":false}).appendPoint([111,-108.275]).appendArc([111.7,-107.575],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([122.3,-107.575]).appendArc([123,-108.275],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([123,-114.475]).appendArc([124,-115.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([144,-115.475]).appendArc([145,-114.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([145,-114.175]).appendArc([145.7,-113.475],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([156,-113.475]).appendArc([157,-114.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([157,-114.775]).appendArc([157.7,-115.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([173,-115.475]).appendArc([174,-116.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([174,-116.775]).appendArc([174.7,-117.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([188.5583046,-117.475]).appendArc([189.5093611,-118.784017],{"radius":1,"clockwise":true,"large":false}).appendPoint([187.9694353,-123.5234212]).appendArc([188.418863,-124.4054727],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([208.0106272,-130.7712228]).appendArc([208.8926787,-130.3217951],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([217.7305647,-103.1215788]).appendArc([217.281137,-102.2395273],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([214.9836881,-101.4930409]).appendArc([214.5,-100.8273013],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([214.5,-33.2225]).appendArc([213.8,-32.5225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([196.7,-32.5225]).appendArc([196,-31.8225],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([196,-28.5225]).appendArc([195,-27.5225],{"radius":1,"clockwise":false,"large":false}).appendPoint([180,-27.5225]).appendArc([179,-26.5225],{"radius":1,"clockwise":true,"large":false}).appendPoint([179,-26.3175]).appendArc([178.3,-25.6175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([163,-25.6175]).appendArc([162,-24.6175],{"radius":1,"clockwise":true,"large":false}).appendPoint([162,-18.9975]).appendArc([161,-17.9975],{"radius":1,"clockwise":false,"large":false}).appendPoint([141,-17.9975]).appendArc([140,-18.9975],{"radius":1,"clockwise":false,"large":false}).appendPoint([140,-21.76]).appendArc([139,-22.76],{"radius":1,"clockwise":true,"large":false}).appendPoint([124,-22.76]).appendArc([123,-23.76],{"radius":1,"clockwise":false,"large":false}).appendPoint([123,-27.475]).appendArc([122,-28.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([107,-28.475]).appendArc([106,-29.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([106,-37]).appendArc([105,-38],{"radius":1,"clockwise":true,"large":false}).appendPoint([90,-38]).appendArc([89,-39],{"radius":1,"clockwise":false,"large":false}).appendPoint([89,-110]).appendArc([90,-111],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}




                function _standoff_case_fn() {
                    

                // creating part 0 of case _standoff
                let _standoff__part_0 = standoff_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoff__part_0_bounds = _standoff__part_0.getBounds();
                let _standoff__part_0_x = _standoff__part_0_bounds[0].x + (_standoff__part_0_bounds[1].x - _standoff__part_0_bounds[0].x) / 2
                let _standoff__part_0_y = _standoff__part_0_bounds[0].y + (_standoff__part_0_bounds[1].y - _standoff__part_0_bounds[0].y) / 2
                _standoff__part_0 = translate([-_standoff__part_0_x, -_standoff__part_0_y, 0], _standoff__part_0);
                _standoff__part_0 = rotate([0,0,0], _standoff__part_0);
                _standoff__part_0 = translate([_standoff__part_0_x, _standoff__part_0_y, 0], _standoff__part_0);

                _standoff__part_0 = translate([0,0,0], _standoff__part_0);
                let result = _standoff__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function bottom_cover_case_fn() {
                    

                // creating part 0 of case bottom_cover
                let bottom_cover__part_0 = big_base_layout_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom_cover__part_0_bounds = bottom_cover__part_0.getBounds();
                let bottom_cover__part_0_x = bottom_cover__part_0_bounds[0].x + (bottom_cover__part_0_bounds[1].x - bottom_cover__part_0_bounds[0].x) / 2
                let bottom_cover__part_0_y = bottom_cover__part_0_bounds[0].y + (bottom_cover__part_0_bounds[1].y - bottom_cover__part_0_bounds[0].y) / 2
                bottom_cover__part_0 = translate([-bottom_cover__part_0_x, -bottom_cover__part_0_y, 0], bottom_cover__part_0);
                bottom_cover__part_0 = rotate([0,0,0], bottom_cover__part_0);
                bottom_cover__part_0 = translate([bottom_cover__part_0_x, bottom_cover__part_0_y, 0], bottom_cover__part_0);

                bottom_cover__part_0 = translate([0,0,0], bottom_cover__part_0);
                let result = bottom_cover__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            

                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = big_base_layout_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = base_layout_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _standoff_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = bottom_cover_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = wall_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        