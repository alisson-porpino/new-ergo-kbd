function big_base_layout_extrude_1_outline_fn(){
    return new CSG.Path2D([[89,-112],[111,-112]]).appendArc([112,-111],{"radius":1,"clockwise":false,"large":false}).appendPoint([112,-109.275]).appendArc([112.7,-108.575],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([121.3,-108.575]).appendArc([122,-109.275],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([122,-115.475]).appendArc([123,-116.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([145,-116.475]).appendArc([146,-115.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([146,-115.175]).appendArc([146.7,-114.475],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([155,-114.475]).appendArc([156,-115.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([156,-115.775]).appendArc([156.7,-116.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([172,-116.475]).appendArc([173,-117.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([173,-117.775]).appendArc([173.7,-118.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([187.1819227,-118.475]).appendArc([188.1331173,-119.7835916],{"radius":1,"clockwise":true,"large":false}).appendPoint([186.7093618,-124.1654607]).appendArc([187.1587895,-125.0475122],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([208.6526667,-132.0312963]).appendArc([209.5347182,-131.5818686],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([218.9906382,-102.4795393]).appendArc([218.5412105,-101.5974878],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([215.9836881,-100.7664984]).appendArc([215.5,-100.1007588],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([215.5,-32.2225]).appendArc([214.8,-31.5225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([197.7,-31.5225]).appendArc([197,-30.8225],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([197,-27.5225]).appendArc([196,-26.5225],{"radius":1,"clockwise":false,"large":false}).appendPoint([181,-26.5225]).appendArc([180,-25.5225],{"radius":1,"clockwise":true,"large":false}).appendPoint([180,-25.3175]).appendArc([179.3,-24.6175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([164,-24.6175]).appendArc([163,-23.6175],{"radius":1,"clockwise":true,"large":false}).appendPoint([163,-17.9975]).appendArc([162,-16.9975],{"radius":1,"clockwise":false,"large":false}).appendPoint([140,-16.9975]).appendArc([139,-17.9975],{"radius":1,"clockwise":false,"large":false}).appendPoint([139,-20.76]).appendArc([138,-21.76],{"radius":1,"clockwise":true,"large":false}).appendPoint([123,-21.76]).appendArc([122,-22.76],{"radius":1,"clockwise":false,"large":false}).appendPoint([122,-26.475]).appendArc([121,-27.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([106,-27.475]).appendArc([105,-28.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([105,-36]).appendArc([104,-37],{"radius":1,"clockwise":true,"large":false}).appendPoint([89,-37]).appendArc([88,-38],{"radius":1,"clockwise":false,"large":false}).appendPoint([88,-111]).appendArc([89,-112],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
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
            
            
        
            function main() {
                return bottom_cover_case_fn();
            }

        