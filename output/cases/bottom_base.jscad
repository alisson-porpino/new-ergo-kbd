function base_layout_extrude_1_outline_fn(){
    return new CSG.Path2D([[90,-111],[110,-111]]).appendArc([111,-110],{"radius":1,"clockwise":false,"large":false}).appendPoint([111,-108.275]).appendArc([111.7,-107.575],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([122.3,-107.575]).appendArc([123,-108.275],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([123,-114.475]).appendArc([124,-115.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([144,-115.475]).appendArc([145,-114.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([145,-114.175]).appendArc([145.7,-113.475],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([156,-113.475]).appendArc([157,-114.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([157,-114.775]).appendArc([157.7,-115.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([173,-115.475]).appendArc([174,-116.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([174,-116.775]).appendArc([174.7,-117.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([188.5583046,-117.475]).appendArc([189.5093611,-118.784017],{"radius":1,"clockwise":true,"large":false}).appendPoint([187.9694353,-123.5234212]).appendArc([188.418863,-124.4054727],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([208.0106272,-130.7712228]).appendArc([208.8926787,-130.3217951],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([217.7305647,-103.1215788]).appendArc([217.281137,-102.2395273],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([214.9836881,-101.4930409]).appendArc([214.5,-100.8273013],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([214.5,-33.2225]).appendArc([213.8,-32.5225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([196.7,-32.5225]).appendArc([196,-31.8225],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([196,-28.5225]).appendArc([195,-27.5225],{"radius":1,"clockwise":false,"large":false}).appendPoint([180,-27.5225]).appendArc([179,-26.5225],{"radius":1,"clockwise":true,"large":false}).appendPoint([179,-26.3175]).appendArc([178.3,-25.6175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([163,-25.6175]).appendArc([162,-24.6175],{"radius":1,"clockwise":true,"large":false}).appendPoint([162,-18.9975]).appendArc([161,-17.9975],{"radius":1,"clockwise":false,"large":false}).appendPoint([141,-17.9975]).appendArc([140,-18.9975],{"radius":1,"clockwise":false,"large":false}).appendPoint([140,-21.76]).appendArc([139,-22.76],{"radius":1,"clockwise":true,"large":false}).appendPoint([124,-22.76]).appendArc([123,-23.76],{"radius":1,"clockwise":false,"large":false}).appendPoint([123,-27.475]).appendArc([122,-28.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([107,-28.475]).appendArc([106,-29.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([106,-37]).appendArc([105,-38],{"radius":1,"clockwise":true,"large":false}).appendPoint([90,-38]).appendArc([89,-39],{"radius":1,"clockwise":false,"large":false}).appendPoint([89,-110]).appendArc([90,-111],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_base_case_fn() {
                    

                // creating part 0 of case bottom_base
                let bottom_base__part_0 = base_layout_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom_base__part_0_bounds = bottom_base__part_0.getBounds();
                let bottom_base__part_0_x = bottom_base__part_0_bounds[0].x + (bottom_base__part_0_bounds[1].x - bottom_base__part_0_bounds[0].x) / 2
                let bottom_base__part_0_y = bottom_base__part_0_bounds[0].y + (bottom_base__part_0_bounds[1].y - bottom_base__part_0_bounds[0].y) / 2
                bottom_base__part_0 = translate([-bottom_base__part_0_x, -bottom_base__part_0_y, 0], bottom_base__part_0);
                bottom_base__part_0 = rotate([0,0,0], bottom_base__part_0);
                bottom_base__part_0 = translate([bottom_base__part_0_x, bottom_base__part_0_y, 0], bottom_base__part_0);

                bottom_base__part_0 = translate([0,0,0], bottom_base__part_0);
                let result = bottom_base__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_base_case_fn();
            }

        