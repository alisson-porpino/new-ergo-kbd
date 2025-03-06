function union_extrude_1_outline_fn(){
    return new CSG.Path2D([[90,-111],[110,-111]]).appendArc([111,-110],{"radius":1,"clockwise":false,"large":false}).appendPoint([111,-108.275]).appendArc([111.7,-107.575],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([122.3,-107.575]).appendArc([123,-108.275],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([123,-114.475]).appendArc([124,-115.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([144,-115.475]).appendArc([145,-114.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([145,-114.175]).appendArc([145.7,-113.475],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([156,-113.475]).appendArc([157,-114.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([157,-114.775]).appendArc([157.7,-115.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([173,-115.475]).appendArc([174,-116.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([174,-116.775]).appendArc([174.7,-117.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([188.5583046,-117.475]).appendArc([189.5093611,-118.784017],{"radius":1,"clockwise":true,"large":false}).appendPoint([187.9694353,-123.5234212]).appendArc([188.418863,-124.4054727],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([208.0106272,-130.7712228]).appendArc([208.8926787,-130.3217951],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([217.7305647,-103.1215788]).appendArc([217.281137,-102.2395273],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([214.9836881,-101.4930409]).appendArc([214.5,-100.8273013],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([214.5,-33.2225]).appendArc([213.8,-32.5225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([196.7,-32.5225]).appendArc([196,-31.8225],{"radius":0.7,"clockwise":true,"large":false}).appendPoint([196,-28.5225]).appendArc([195,-27.5225],{"radius":1,"clockwise":false,"large":false}).appendPoint([180,-27.5225]).appendArc([179,-26.5225],{"radius":1,"clockwise":true,"large":false}).appendPoint([179,-26.3175]).appendArc([178.3,-25.6175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([163,-25.6175]).appendArc([162,-24.6175],{"radius":1,"clockwise":true,"large":false}).appendPoint([162,-18.9975]).appendArc([161,-17.9975],{"radius":1,"clockwise":false,"large":false}).appendPoint([141,-17.9975]).appendArc([140,-18.9975],{"radius":1,"clockwise":false,"large":false}).appendPoint([140,-21.76]).appendArc([139,-22.76],{"radius":1,"clockwise":true,"large":false}).appendPoint([124,-22.76]).appendArc([123,-23.76],{"radius":1,"clockwise":false,"large":false}).appendPoint([123,-27.475]).appendArc([122,-28.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([107,-28.475]).appendArc([106,-29.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([106,-37]).appendArc([105,-38],{"radius":1,"clockwise":true,"large":false}).appendPoint([90,-38]).appendArc([89,-39],{"radius":1,"clockwise":false,"large":false}).appendPoint([89,-110]).appendArc([90,-111],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[197.7,-95.5225],[208.3,-95.5225]]).appendArc([209,-94.8225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([209,-84.2225]).appendArc([208.3,-83.5225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([197.7,-83.5225]).appendArc([197,-84.2225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([197,-94.8225]).appendArc([197.7,-95.5225],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[109.7,-47.475],[124.3,-47.475]]).appendArc([125,-46.775],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([125,-32.175]).appendArc([124.3,-31.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([109.7,-31.475]).appendArc([109,-32.175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([109,-46.775]).appendArc([109.7,-47.475],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[109.7,-64.475],[124.3,-64.475]]).appendArc([125,-63.775],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([125,-49.175]).appendArc([124.3,-48.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([109.7,-48.475]).appendArc([109,-49.175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([109,-63.775]).appendArc([109.7,-64.475],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[109.7,-81.475],[124.3,-81.475]]).appendArc([125,-80.775],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([125,-66.175]).appendArc([124.3,-65.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([109.7,-65.475]).appendArc([109,-66.175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([109,-80.775]).appendArc([109.7,-81.475],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[109.7,-98.475],[124.3,-98.475]]).appendArc([125,-97.775],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([125,-83.175]).appendArc([124.3,-82.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([109.7,-82.475]).appendArc([109,-83.175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([109,-97.775]).appendArc([109.7,-98.475],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[92.7,-57],[107.3,-57]]).appendArc([108,-56.3],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([108,-41.7]).appendArc([107.3,-41],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([92.7,-41]).appendArc([92,-41.7],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([92,-56.3]).appendArc([92.7,-57],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[92.7,-74],[107.3,-74]]).appendArc([108,-73.3],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([108,-58.7]).appendArc([107.3,-58],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([92.7,-58]).appendArc([92,-58.7],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([92,-73.3]).appendArc([92.7,-74],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[92.7,-91],[107.3,-91]]).appendArc([108,-90.3],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([108,-75.7]).appendArc([107.3,-75],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([92.7,-75]).appendArc([92,-75.7],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([92,-90.3]).appendArc([92.7,-91],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[92.7,-108],[107.3,-108]]).appendArc([108,-107.3],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([108,-92.7]).appendArc([107.3,-92],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([92.7,-92]).appendArc([92,-92.7],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([92,-107.3]).appendArc([92.7,-108],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[126.7,-112.475],[141.3,-112.475]]).appendArc([142,-111.775],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([142,-97.175]).appendArc([141.3,-96.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([126.7,-96.475]).appendArc([126,-97.175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([126,-111.775]).appendArc([126.7,-112.475],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[126.7,-41.76],[141.3,-41.76]]).appendArc([142,-41.06],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([142,-26.46]).appendArc([141.3,-25.76],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([126.7,-25.76]).appendArc([126,-26.46],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([126,-41.06]).appendArc([126.7,-41.76],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[126.7,-58.76],[141.3,-58.76]]).appendArc([142,-58.06],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([142,-43.46]).appendArc([141.3,-42.76],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([126.7,-42.76]).appendArc([126,-43.46],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([126,-58.06]).appendArc([126.7,-58.76],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[126.7,-75.76],[141.3,-75.76]]).appendArc([142,-75.06],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([142,-60.46]).appendArc([141.3,-59.76],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([126.7,-59.76]).appendArc([126,-60.46],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([126,-75.06]).appendArc([126.7,-75.76],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[126.7,-92.76],[141.3,-92.76]]).appendArc([142,-92.06],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([142,-77.46]).appendArc([141.3,-76.76],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([126.7,-76.76]).appendArc([126,-77.46],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([126,-92.06]).appendArc([126.7,-92.76],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[177.7,-114.475],[192.3,-114.475]]).appendArc([193,-113.775],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([193,-99.175]).appendArc([192.3,-98.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([177.7,-98.475]).appendArc([177,-99.175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([177,-113.775]).appendArc([177.7,-114.475],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[160.7,-112.475],[175.3,-112.475]]).appendArc([176,-111.775],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([176,-97.175]).appendArc([175.3,-96.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([160.7,-96.475]).appendArc([160,-97.175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([160,-111.775]).appendArc([160.7,-112.475],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[143.7,-110.475],[158.3,-110.475]]).appendArc([159,-109.775],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([159,-95.175]).appendArc([158.3,-94.475],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([143.7,-94.475]).appendArc([143,-95.175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([143,-109.775]).appendArc([143.7,-110.475],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[177.7,-46.5225],[192.3,-46.5225]]).appendArc([193,-45.8225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([193,-31.2225]).appendArc([192.3,-30.5225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([177.7,-30.5225]).appendArc([177,-31.2225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([177,-45.8225]).appendArc([177.7,-46.5225],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[177.7,-63.5225],[192.3,-63.5225]]).appendArc([193,-62.8225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([193,-48.2225]).appendArc([192.3,-47.5225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([177.7,-47.5225]).appendArc([177,-48.2225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([177,-62.8225]).appendArc([177.7,-63.5225],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[177.7,-80.5225],[192.3,-80.5225]]).appendArc([193,-79.8225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([193,-65.2225]).appendArc([192.3,-64.5225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([177.7,-64.5225]).appendArc([177,-65.2225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([177,-79.8225]).appendArc([177.7,-80.5225],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[177.7,-97.5225],[192.3,-97.5225]]).appendArc([193,-96.8225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([193,-82.2225]).appendArc([192.3,-81.5225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([177.7,-81.5225]).appendArc([177,-82.2225],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([177,-96.8225]).appendArc([177.7,-97.5225],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[160.7,-44.6175],[175.3,-44.6175]]).appendArc([176,-43.9175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([176,-29.3175]).appendArc([175.3,-28.6175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([160.7,-28.6175]).appendArc([160,-29.3175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([160,-43.9175]).appendArc([160.7,-44.6175],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[160.7,-61.6175],[175.3,-61.6175]]).appendArc([176,-60.9175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([176,-46.3175]).appendArc([175.3,-45.6175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([160.7,-45.6175]).appendArc([160,-46.3175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([160,-60.9175]).appendArc([160.7,-61.6175],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[160.7,-78.6175],[175.3,-78.6175]]).appendArc([176,-77.9175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([176,-63.3175]).appendArc([175.3,-62.6175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([160.7,-62.6175]).appendArc([160,-63.3175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([160,-77.9175]).appendArc([160.7,-78.6175],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[160.7,-95.6175],[175.3,-95.6175]]).appendArc([176,-94.9175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([176,-80.3175]).appendArc([175.3,-79.6175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([160.7,-79.6175]).appendArc([160,-80.3175],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([160,-94.9175]).appendArc([160.7,-95.6175],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[143.7,-36.9975],[158.3,-36.9975]]).appendArc([159,-36.2975],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([159,-21.6975]).appendArc([158.3,-20.9975],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([143.7,-20.9975]).appendArc([143,-21.6975],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([143,-36.2975]).appendArc([143.7,-36.9975],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[143.7,-53.9975],[158.3,-53.9975]]).appendArc([159,-53.2975],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([159,-38.6975]).appendArc([158.3,-37.9975],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([143.7,-37.9975]).appendArc([143,-38.6975],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([143,-53.2975]).appendArc([143.7,-53.9975],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[143.7,-70.9975],[158.3,-70.9975]]).appendArc([159,-70.2975],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([159,-55.6975]).appendArc([158.3,-54.9975],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([143.7,-54.9975]).appendArc([143,-55.6975],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([143,-70.2975]).appendArc([143.7,-70.9975],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[143.7,-87.9975],[158.3,-87.9975]]).appendArc([159,-87.2975],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([159,-72.6975]).appendArc([158.3,-71.9975],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([143.7,-71.9975]).appendArc([143,-72.6975],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([143,-87.2975]).appendArc([143.7,-87.9975],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[206.9665601,-126.5415746],[213.9503442,-105.0476974]]).appendArc([213.5009165,-104.1656459],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([199.6154914,-99.6539977]).appendArc([198.7334399,-100.1034254],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([191.7496558,-121.5973026]).appendArc([192.1990835,-122.4793541],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([206.0845086,-126.9910023]).appendArc([206.9665601,-126.5415746],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[195.7,-67.3125],[212.3,-67.3125]]).appendArc([213,-66.6125],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([213,-34.9325]).appendArc([212.3,-34.2325],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([195.7,-34.2325]).appendArc([195,-34.9325],{"radius":0.7,"clockwise":false,"large":false}).appendPoint([195,-66.6125]).appendArc([195.7,-67.3125],{"radius":0.7,"clockwise":false,"large":false}).close().innerToCAG()
)).extrude({ offset: [0, 0, 1] });
}




                function key_cover_case_fn() {
                    

                // creating part 0 of case key_cover
                let key_cover__part_0 = union_extrude_1_outline_fn();

                // make sure that rotations are relative
                let key_cover__part_0_bounds = key_cover__part_0.getBounds();
                let key_cover__part_0_x = key_cover__part_0_bounds[0].x + (key_cover__part_0_bounds[1].x - key_cover__part_0_bounds[0].x) / 2
                let key_cover__part_0_y = key_cover__part_0_bounds[0].y + (key_cover__part_0_bounds[1].y - key_cover__part_0_bounds[0].y) / 2
                key_cover__part_0 = translate([-key_cover__part_0_x, -key_cover__part_0_y, 0], key_cover__part_0);
                key_cover__part_0 = rotate([0,0,0], key_cover__part_0);
                key_cover__part_0 = translate([key_cover__part_0_x, key_cover__part_0_y, 0], key_cover__part_0);

                key_cover__part_0 = translate([0,0,0], key_cover__part_0);
                let result = key_cover__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return key_cover_case_fn();
            }

        