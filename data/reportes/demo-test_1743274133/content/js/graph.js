/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 36.0, "minX": 0.0, "maxY": 131350.0, "series": [{"data": [[0.0, 36.0], [0.1, 45.0], [0.2, 47.0], [0.3, 50.0], [0.4, 54.0], [0.5, 58.0], [0.6, 62.0], [0.7, 65.0], [0.8, 67.0], [0.9, 69.0], [1.0, 71.0], [1.1, 73.0], [1.2, 75.0], [1.3, 77.0], [1.4, 78.0], [1.5, 80.0], [1.6, 80.0], [1.7, 82.0], [1.8, 83.0], [1.9, 84.0], [2.0, 85.0], [2.1, 87.0], [2.2, 88.0], [2.3, 89.0], [2.4, 90.0], [2.5, 91.0], [2.6, 91.0], [2.7, 92.0], [2.8, 93.0], [2.9, 94.0], [3.0, 94.0], [3.1, 94.0], [3.2, 95.0], [3.3, 96.0], [3.4, 96.0], [3.5, 97.0], [3.6, 98.0], [3.7, 99.0], [3.8, 99.0], [3.9, 100.0], [4.0, 101.0], [4.1, 101.0], [4.2, 102.0], [4.3, 102.0], [4.4, 103.0], [4.5, 103.0], [4.6, 104.0], [4.7, 104.0], [4.8, 105.0], [4.9, 105.0], [5.0, 106.0], [5.1, 106.0], [5.2, 107.0], [5.3, 107.0], [5.4, 107.0], [5.5, 108.0], [5.6, 108.0], [5.7, 109.0], [5.8, 109.0], [5.9, 109.0], [6.0, 110.0], [6.1, 110.0], [6.2, 110.0], [6.3, 111.0], [6.4, 111.0], [6.5, 111.0], [6.6, 111.0], [6.7, 112.0], [6.8, 112.0], [6.9, 112.0], [7.0, 113.0], [7.1, 113.0], [7.2, 113.0], [7.3, 114.0], [7.4, 114.0], [7.5, 114.0], [7.6, 114.0], [7.7, 115.0], [7.8, 115.0], [7.9, 115.0], [8.0, 115.0], [8.1, 116.0], [8.2, 116.0], [8.3, 116.0], [8.4, 117.0], [8.5, 117.0], [8.6, 117.0], [8.7, 117.0], [8.8, 118.0], [8.9, 118.0], [9.0, 118.0], [9.1, 119.0], [9.2, 119.0], [9.3, 119.0], [9.4, 119.0], [9.5, 119.0], [9.6, 120.0], [9.7, 120.0], [9.8, 120.0], [9.9, 120.0], [10.0, 121.0], [10.1, 121.0], [10.2, 121.0], [10.3, 121.0], [10.4, 122.0], [10.5, 122.0], [10.6, 122.0], [10.7, 122.0], [10.8, 122.0], [10.9, 122.0], [11.0, 123.0], [11.1, 123.0], [11.2, 123.0], [11.3, 123.0], [11.4, 123.0], [11.5, 124.0], [11.6, 124.0], [11.7, 124.0], [11.8, 125.0], [11.9, 125.0], [12.0, 125.0], [12.1, 125.0], [12.2, 125.0], [12.3, 126.0], [12.4, 126.0], [12.5, 126.0], [12.6, 126.0], [12.7, 126.0], [12.8, 127.0], [12.9, 127.0], [13.0, 127.0], [13.1, 127.0], [13.2, 127.0], [13.3, 128.0], [13.4, 128.0], [13.5, 128.0], [13.6, 128.0], [13.7, 128.0], [13.8, 129.0], [13.9, 129.0], [14.0, 129.0], [14.1, 129.0], [14.2, 129.0], [14.3, 129.0], [14.4, 130.0], [14.5, 130.0], [14.6, 130.0], [14.7, 130.0], [14.8, 130.0], [14.9, 130.0], [15.0, 130.0], [15.1, 131.0], [15.2, 131.0], [15.3, 131.0], [15.4, 131.0], [15.5, 131.0], [15.6, 131.0], [15.7, 132.0], [15.8, 132.0], [15.9, 132.0], [16.0, 132.0], [16.1, 132.0], [16.2, 133.0], [16.3, 133.0], [16.4, 133.0], [16.5, 133.0], [16.6, 133.0], [16.7, 133.0], [16.8, 134.0], [16.9, 134.0], [17.0, 134.0], [17.1, 134.0], [17.2, 134.0], [17.3, 134.0], [17.4, 134.0], [17.5, 135.0], [17.6, 135.0], [17.7, 135.0], [17.8, 135.0], [17.9, 135.0], [18.0, 136.0], [18.1, 136.0], [18.2, 136.0], [18.3, 136.0], [18.4, 136.0], [18.5, 136.0], [18.6, 136.0], [18.7, 137.0], [18.8, 137.0], [18.9, 137.0], [19.0, 137.0], [19.1, 137.0], [19.2, 137.0], [19.3, 138.0], [19.4, 138.0], [19.5, 138.0], [19.6, 138.0], [19.7, 138.0], [19.8, 138.0], [19.9, 138.0], [20.0, 138.0], [20.1, 139.0], [20.2, 139.0], [20.3, 139.0], [20.4, 139.0], [20.5, 139.0], [20.6, 139.0], [20.7, 140.0], [20.8, 140.0], [20.9, 140.0], [21.0, 140.0], [21.1, 140.0], [21.2, 140.0], [21.3, 141.0], [21.4, 141.0], [21.5, 141.0], [21.6, 141.0], [21.7, 141.0], [21.8, 141.0], [21.9, 141.0], [22.0, 142.0], [22.1, 142.0], [22.2, 142.0], [22.3, 142.0], [22.4, 142.0], [22.5, 142.0], [22.6, 143.0], [22.7, 143.0], [22.8, 143.0], [22.9, 143.0], [23.0, 143.0], [23.1, 143.0], [23.2, 143.0], [23.3, 144.0], [23.4, 144.0], [23.5, 144.0], [23.6, 144.0], [23.7, 144.0], [23.8, 144.0], [23.9, 144.0], [24.0, 144.0], [24.1, 145.0], [24.2, 145.0], [24.3, 145.0], [24.4, 145.0], [24.5, 145.0], [24.6, 146.0], [24.7, 146.0], [24.8, 146.0], [24.9, 146.0], [25.0, 146.0], [25.1, 146.0], [25.2, 146.0], [25.3, 147.0], [25.4, 147.0], [25.5, 147.0], [25.6, 147.0], [25.7, 147.0], [25.8, 148.0], [25.9, 148.0], [26.0, 148.0], [26.1, 148.0], [26.2, 148.0], [26.3, 148.0], [26.4, 148.0], [26.5, 148.0], [26.6, 149.0], [26.7, 149.0], [26.8, 149.0], [26.9, 149.0], [27.0, 149.0], [27.1, 149.0], [27.2, 149.0], [27.3, 149.0], [27.4, 150.0], [27.5, 150.0], [27.6, 150.0], [27.7, 150.0], [27.8, 150.0], [27.9, 150.0], [28.0, 151.0], [28.1, 151.0], [28.2, 151.0], [28.3, 151.0], [28.4, 151.0], [28.5, 151.0], [28.6, 151.0], [28.7, 152.0], [28.8, 152.0], [28.9, 152.0], [29.0, 152.0], [29.1, 152.0], [29.2, 152.0], [29.3, 152.0], [29.4, 153.0], [29.5, 153.0], [29.6, 153.0], [29.7, 153.0], [29.8, 153.0], [29.9, 153.0], [30.0, 154.0], [30.1, 154.0], [30.2, 154.0], [30.3, 154.0], [30.4, 154.0], [30.5, 154.0], [30.6, 154.0], [30.7, 155.0], [30.8, 155.0], [30.9, 155.0], [31.0, 155.0], [31.1, 155.0], [31.2, 155.0], [31.3, 156.0], [31.4, 156.0], [31.5, 156.0], [31.6, 156.0], [31.7, 156.0], [31.8, 156.0], [31.9, 156.0], [32.0, 157.0], [32.1, 157.0], [32.2, 157.0], [32.3, 157.0], [32.4, 157.0], [32.5, 157.0], [32.6, 158.0], [32.7, 158.0], [32.8, 158.0], [32.9, 158.0], [33.0, 158.0], [33.1, 158.0], [33.2, 158.0], [33.3, 159.0], [33.4, 159.0], [33.5, 159.0], [33.6, 159.0], [33.7, 159.0], [33.8, 159.0], [33.9, 160.0], [34.0, 160.0], [34.1, 160.0], [34.2, 160.0], [34.3, 160.0], [34.4, 160.0], [34.5, 161.0], [34.6, 161.0], [34.7, 161.0], [34.8, 161.0], [34.9, 161.0], [35.0, 161.0], [35.1, 162.0], [35.2, 162.0], [35.3, 162.0], [35.4, 162.0], [35.5, 162.0], [35.6, 162.0], [35.7, 162.0], [35.8, 163.0], [35.9, 163.0], [36.0, 163.0], [36.1, 163.0], [36.2, 163.0], [36.3, 163.0], [36.4, 164.0], [36.5, 164.0], [36.6, 164.0], [36.7, 164.0], [36.8, 164.0], [36.9, 164.0], [37.0, 164.0], [37.1, 165.0], [37.2, 165.0], [37.3, 165.0], [37.4, 165.0], [37.5, 165.0], [37.6, 166.0], [37.7, 166.0], [37.8, 166.0], [37.9, 166.0], [38.0, 166.0], [38.1, 166.0], [38.2, 166.0], [38.3, 167.0], [38.4, 167.0], [38.5, 167.0], [38.6, 167.0], [38.7, 167.0], [38.8, 167.0], [38.9, 167.0], [39.0, 168.0], [39.1, 168.0], [39.2, 168.0], [39.3, 168.0], [39.4, 168.0], [39.5, 168.0], [39.6, 168.0], [39.7, 169.0], [39.8, 169.0], [39.9, 169.0], [40.0, 169.0], [40.1, 169.0], [40.2, 170.0], [40.3, 170.0], [40.4, 170.0], [40.5, 170.0], [40.6, 170.0], [40.7, 170.0], [40.8, 170.0], [40.9, 171.0], [41.0, 171.0], [41.1, 171.0], [41.2, 171.0], [41.3, 171.0], [41.4, 172.0], [41.5, 172.0], [41.6, 172.0], [41.7, 172.0], [41.8, 172.0], [41.9, 172.0], [42.0, 172.0], [42.1, 173.0], [42.2, 173.0], [42.3, 173.0], [42.4, 173.0], [42.5, 173.0], [42.6, 173.0], [42.7, 174.0], [42.8, 174.0], [42.9, 174.0], [43.0, 174.0], [43.1, 174.0], [43.2, 174.0], [43.3, 175.0], [43.4, 175.0], [43.5, 175.0], [43.6, 175.0], [43.7, 175.0], [43.8, 175.0], [43.9, 176.0], [44.0, 176.0], [44.1, 176.0], [44.2, 176.0], [44.3, 176.0], [44.4, 176.0], [44.5, 177.0], [44.6, 177.0], [44.7, 177.0], [44.8, 177.0], [44.9, 177.0], [45.0, 177.0], [45.1, 177.0], [45.2, 178.0], [45.3, 178.0], [45.4, 178.0], [45.5, 178.0], [45.6, 178.0], [45.7, 178.0], [45.8, 179.0], [45.9, 179.0], [46.0, 179.0], [46.1, 179.0], [46.2, 179.0], [46.3, 179.0], [46.4, 180.0], [46.5, 180.0], [46.6, 180.0], [46.7, 180.0], [46.8, 180.0], [46.9, 180.0], [47.0, 180.0], [47.1, 181.0], [47.2, 181.0], [47.3, 181.0], [47.4, 181.0], [47.5, 181.0], [47.6, 182.0], [47.7, 182.0], [47.8, 182.0], [47.9, 182.0], [48.0, 182.0], [48.1, 182.0], [48.2, 183.0], [48.3, 183.0], [48.4, 183.0], [48.5, 183.0], [48.6, 183.0], [48.7, 183.0], [48.8, 184.0], [48.9, 184.0], [49.0, 184.0], [49.1, 184.0], [49.2, 184.0], [49.3, 184.0], [49.4, 185.0], [49.5, 185.0], [49.6, 185.0], [49.7, 185.0], [49.8, 185.0], [49.9, 186.0], [50.0, 186.0], [50.1, 186.0], [50.2, 186.0], [50.3, 186.0], [50.4, 187.0], [50.5, 187.0], [50.6, 187.0], [50.7, 187.0], [50.8, 187.0], [50.9, 187.0], [51.0, 188.0], [51.1, 188.0], [51.2, 188.0], [51.3, 188.0], [51.4, 188.0], [51.5, 189.0], [51.6, 189.0], [51.7, 189.0], [51.8, 189.0], [51.9, 189.0], [52.0, 189.0], [52.1, 189.0], [52.2, 190.0], [52.3, 190.0], [52.4, 190.0], [52.5, 190.0], [52.6, 190.0], [52.7, 191.0], [52.8, 191.0], [52.9, 191.0], [53.0, 191.0], [53.1, 191.0], [53.2, 191.0], [53.3, 192.0], [53.4, 192.0], [53.5, 192.0], [53.6, 192.0], [53.7, 192.0], [53.8, 192.0], [53.9, 192.0], [54.0, 193.0], [54.1, 193.0], [54.2, 193.0], [54.3, 193.0], [54.4, 193.0], [54.5, 194.0], [54.6, 194.0], [54.7, 194.0], [54.8, 194.0], [54.9, 194.0], [55.0, 194.0], [55.1, 195.0], [55.2, 195.0], [55.3, 195.0], [55.4, 195.0], [55.5, 195.0], [55.6, 195.0], [55.7, 196.0], [55.8, 196.0], [55.9, 196.0], [56.0, 196.0], [56.1, 196.0], [56.2, 196.0], [56.3, 197.0], [56.4, 197.0], [56.5, 197.0], [56.6, 197.0], [56.7, 197.0], [56.8, 198.0], [56.9, 198.0], [57.0, 198.0], [57.1, 198.0], [57.2, 198.0], [57.3, 198.0], [57.4, 199.0], [57.5, 199.0], [57.6, 199.0], [57.7, 199.0], [57.8, 199.0], [57.9, 200.0], [58.0, 200.0], [58.1, 200.0], [58.2, 200.0], [58.3, 200.0], [58.4, 201.0], [58.5, 201.0], [58.6, 201.0], [58.7, 201.0], [58.8, 201.0], [58.9, 202.0], [59.0, 202.0], [59.1, 202.0], [59.2, 202.0], [59.3, 202.0], [59.4, 202.0], [59.5, 203.0], [59.6, 203.0], [59.7, 203.0], [59.8, 203.0], [59.9, 203.0], [60.0, 204.0], [60.1, 204.0], [60.2, 204.0], [60.3, 204.0], [60.4, 204.0], [60.5, 204.0], [60.6, 205.0], [60.7, 205.0], [60.8, 205.0], [60.9, 205.0], [61.0, 205.0], [61.1, 206.0], [61.2, 206.0], [61.3, 206.0], [61.4, 206.0], [61.5, 206.0], [61.6, 207.0], [61.7, 207.0], [61.8, 207.0], [61.9, 207.0], [62.0, 207.0], [62.1, 208.0], [62.2, 208.0], [62.3, 208.0], [62.4, 208.0], [62.5, 208.0], [62.6, 209.0], [62.7, 209.0], [62.8, 209.0], [62.9, 209.0], [63.0, 209.0], [63.1, 210.0], [63.2, 210.0], [63.3, 210.0], [63.4, 210.0], [63.5, 211.0], [63.6, 211.0], [63.7, 211.0], [63.8, 211.0], [63.9, 211.0], [64.0, 212.0], [64.1, 212.0], [64.2, 212.0], [64.3, 212.0], [64.4, 213.0], [64.5, 213.0], [64.6, 213.0], [64.7, 213.0], [64.8, 214.0], [64.9, 214.0], [65.0, 214.0], [65.1, 214.0], [65.2, 214.0], [65.3, 215.0], [65.4, 215.0], [65.5, 215.0], [65.6, 215.0], [65.7, 216.0], [65.8, 216.0], [65.9, 216.0], [66.0, 216.0], [66.1, 216.0], [66.2, 217.0], [66.3, 217.0], [66.4, 217.0], [66.5, 217.0], [66.6, 217.0], [66.7, 218.0], [66.8, 218.0], [66.9, 218.0], [67.0, 218.0], [67.1, 219.0], [67.2, 219.0], [67.3, 219.0], [67.4, 219.0], [67.5, 219.0], [67.6, 220.0], [67.7, 220.0], [67.8, 220.0], [67.9, 220.0], [68.0, 220.0], [68.1, 220.0], [68.2, 221.0], [68.3, 221.0], [68.4, 221.0], [68.5, 222.0], [68.6, 222.0], [68.7, 222.0], [68.8, 222.0], [68.9, 223.0], [69.0, 223.0], [69.1, 223.0], [69.2, 223.0], [69.3, 223.0], [69.4, 224.0], [69.5, 224.0], [69.6, 224.0], [69.7, 224.0], [69.8, 225.0], [69.9, 225.0], [70.0, 225.0], [70.1, 225.0], [70.2, 226.0], [70.3, 226.0], [70.4, 226.0], [70.5, 226.0], [70.6, 227.0], [70.7, 227.0], [70.8, 227.0], [70.9, 228.0], [71.0, 228.0], [71.1, 228.0], [71.2, 228.0], [71.3, 229.0], [71.4, 229.0], [71.5, 229.0], [71.6, 229.0], [71.7, 230.0], [71.8, 230.0], [71.9, 230.0], [72.0, 230.0], [72.1, 231.0], [72.2, 231.0], [72.3, 231.0], [72.4, 232.0], [72.5, 232.0], [72.6, 232.0], [72.7, 233.0], [72.8, 233.0], [72.9, 233.0], [73.0, 233.0], [73.1, 233.0], [73.2, 234.0], [73.3, 234.0], [73.4, 234.0], [73.5, 234.0], [73.6, 235.0], [73.7, 235.0], [73.8, 235.0], [73.9, 235.0], [74.0, 236.0], [74.1, 236.0], [74.2, 236.0], [74.3, 237.0], [74.4, 237.0], [74.5, 237.0], [74.6, 238.0], [74.7, 238.0], [74.8, 238.0], [74.9, 238.0], [75.0, 239.0], [75.1, 239.0], [75.2, 239.0], [75.3, 240.0], [75.4, 240.0], [75.5, 240.0], [75.6, 241.0], [75.7, 241.0], [75.8, 241.0], [75.9, 241.0], [76.0, 242.0], [76.1, 242.0], [76.2, 242.0], [76.3, 243.0], [76.4, 243.0], [76.5, 243.0], [76.6, 243.0], [76.7, 244.0], [76.8, 244.0], [76.9, 244.0], [77.0, 244.0], [77.1, 245.0], [77.2, 245.0], [77.3, 245.0], [77.4, 246.0], [77.5, 246.0], [77.6, 246.0], [77.7, 247.0], [77.8, 247.0], [77.9, 247.0], [78.0, 247.0], [78.1, 248.0], [78.2, 248.0], [78.3, 249.0], [78.4, 249.0], [78.5, 249.0], [78.6, 249.0], [78.7, 250.0], [78.8, 250.0], [78.9, 251.0], [79.0, 251.0], [79.1, 251.0], [79.2, 252.0], [79.3, 252.0], [79.4, 252.0], [79.5, 253.0], [79.6, 253.0], [79.7, 254.0], [79.8, 254.0], [79.9, 254.0], [80.0, 254.0], [80.1, 255.0], [80.2, 255.0], [80.3, 255.0], [80.4, 256.0], [80.5, 256.0], [80.6, 256.0], [80.7, 257.0], [80.8, 257.0], [80.9, 257.0], [81.0, 258.0], [81.1, 258.0], [81.2, 259.0], [81.3, 259.0], [81.4, 259.0], [81.5, 260.0], [81.6, 260.0], [81.7, 260.0], [81.8, 261.0], [81.9, 261.0], [82.0, 262.0], [82.1, 262.0], [82.2, 263.0], [82.3, 263.0], [82.4, 264.0], [82.5, 265.0], [82.6, 265.0], [82.7, 265.0], [82.8, 266.0], [82.9, 266.0], [83.0, 266.0], [83.1, 267.0], [83.2, 267.0], [83.3, 267.0], [83.4, 268.0], [83.5, 268.0], [83.6, 269.0], [83.7, 269.0], [83.8, 269.0], [83.9, 270.0], [84.0, 270.0], [84.1, 271.0], [84.2, 271.0], [84.3, 271.0], [84.4, 272.0], [84.5, 272.0], [84.6, 273.0], [84.7, 273.0], [84.8, 274.0], [84.9, 274.0], [85.0, 274.0], [85.1, 275.0], [85.2, 275.0], [85.3, 275.0], [85.4, 276.0], [85.5, 276.0], [85.6, 277.0], [85.7, 277.0], [85.8, 277.0], [85.9, 278.0], [86.0, 278.0], [86.1, 279.0], [86.2, 279.0], [86.3, 279.0], [86.4, 280.0], [86.5, 280.0], [86.6, 281.0], [86.7, 282.0], [86.8, 283.0], [86.9, 283.0], [87.0, 284.0], [87.1, 284.0], [87.2, 285.0], [87.3, 285.0], [87.4, 286.0], [87.5, 286.0], [87.6, 287.0], [87.7, 287.0], [87.8, 288.0], [87.9, 288.0], [88.0, 289.0], [88.1, 290.0], [88.2, 291.0], [88.3, 291.0], [88.4, 292.0], [88.5, 292.0], [88.6, 293.0], [88.7, 294.0], [88.8, 294.0], [88.9, 295.0], [89.0, 295.0], [89.1, 296.0], [89.2, 297.0], [89.3, 297.0], [89.4, 298.0], [89.5, 299.0], [89.6, 299.0], [89.7, 300.0], [89.8, 301.0], [89.9, 302.0], [90.0, 302.0], [90.1, 303.0], [90.2, 304.0], [90.3, 304.0], [90.4, 305.0], [90.5, 306.0], [90.6, 307.0], [90.7, 307.0], [90.8, 308.0], [90.9, 309.0], [91.0, 310.0], [91.1, 310.0], [91.2, 311.0], [91.3, 312.0], [91.4, 313.0], [91.5, 314.0], [91.6, 315.0], [91.7, 316.0], [91.8, 317.0], [91.9, 317.0], [92.0, 319.0], [92.1, 320.0], [92.2, 322.0], [92.3, 322.0], [92.4, 324.0], [92.5, 325.0], [92.6, 326.0], [92.7, 327.0], [92.8, 328.0], [92.9, 329.0], [93.0, 331.0], [93.1, 332.0], [93.2, 333.0], [93.3, 334.0], [93.4, 335.0], [93.5, 336.0], [93.6, 337.0], [93.7, 339.0], [93.8, 339.0], [93.9, 341.0], [94.0, 342.0], [94.1, 343.0], [94.2, 344.0], [94.3, 346.0], [94.4, 348.0], [94.5, 348.0], [94.6, 349.0], [94.7, 351.0], [94.8, 352.0], [94.9, 355.0], [95.0, 356.0], [95.1, 358.0], [95.2, 359.0], [95.3, 362.0], [95.4, 363.0], [95.5, 364.0], [95.6, 366.0], [95.7, 368.0], [95.8, 370.0], [95.9, 371.0], [96.0, 372.0], [96.1, 375.0], [96.2, 377.0], [96.3, 380.0], [96.4, 382.0], [96.5, 384.0], [96.6, 387.0], [96.7, 390.0], [96.8, 392.0], [96.9, 394.0], [97.0, 398.0], [97.1, 401.0], [97.2, 404.0], [97.3, 406.0], [97.4, 410.0], [97.5, 412.0], [97.6, 416.0], [97.7, 418.0], [97.8, 420.0], [97.9, 424.0], [98.0, 428.0], [98.1, 434.0], [98.2, 439.0], [98.3, 443.0], [98.4, 448.0], [98.5, 454.0], [98.6, 460.0], [98.7, 468.0], [98.8, 476.0], [98.9, 487.0], [99.0, 503.0], [99.1, 516.0], [99.2, 535.0], [99.3, 553.0], [99.4, 578.0], [99.5, 611.0], [99.6, 981.0], [99.7, 1258.0], [99.8, 1516.0], [99.9, 1713.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 6976.0, "series": [{"data": [[0.0, 491.0], [131300.0, 1.0], [131100.0, 3.0], [600.0, 11.0], [700.0, 2.0], [200.0, 4097.0], [900.0, 6.0], [1000.0, 4.0], [1100.0, 5.0], [1200.0, 5.0], [300.0, 956.0], [1300.0, 4.0], [1400.0, 6.0], [1500.0, 4.0], [1600.0, 5.0], [400.0, 250.0], [100.0, 6976.0], [1700.0, 11.0], [500.0, 61.0], [130900.0, 2.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 131300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 26.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 12771.0, "series": [{"data": [[0.0, 12771.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 103.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 26.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.74327408E12, "maxY": 50.0, "series": [{"data": [[1.74327432E12, 1.0], [1.74327426E12, 4.2], [1.74327408E12, 50.0], [1.74327414E12, 49.95233920459073]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74327432E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 45.0, "minX": 1.0, "maxY": 131350.0, "series": [{"data": [[32.0, 115.375], [8.0, 45.0], [2.0, 130961.0], [41.0, 152.0], [45.0, 118.28571428571429], [46.0, 173.5], [49.0, 154.07692307692307], [48.0, 159.625], [3.0, 130922.0], [50.0, 205.18623481781327], [13.0, 158.0], [14.0, 105.0], [16.0, 103.0], [1.0, 131183.0], [5.0, 131160.5], [21.0, 115.5], [22.0, 122.0], [23.0, 119.0], [6.0, 131350.0], [7.0, 63.0]], "isOverall": false, "label": "Google", "isController": false}, {"data": [[49.9320930232558, 265.8008527131778]], "isOverall": false, "label": "Google-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1.8666666666666667, "minX": 1.74327408E12, "maxY": 352310.23333333334, "series": [{"data": [[1.74327432E12, 14.616666666666667], [1.74327426E12, 73.08333333333333], [1.74327408E12, 58035.05], [1.74327414E12, 352310.23333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74327432E12, 1.8666666666666667], [1.74327426E12, 9.333333333333334], [1.74327408E12, 647.7333333333333], [1.74327414E12, 23421.066666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74327432E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 195.22260301267244, "minX": 1.74327408E12, "maxY": 131183.0, "series": [{"data": [[1.74327432E12, 131183.0], [1.74327426E12, 131110.8], [1.74327408E12, 555.1469740634008], [1.74327414E12, 195.22260301267244]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74327432E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 189.58101538216286, "minX": 1.74327408E12, "maxY": 131179.0, "series": [{"data": [[1.74327432E12, 131179.0], [1.74327426E12, 131107.6], [1.74327408E12, 480.14409221902], [1.74327414E12, 189.58101538216286]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74327432E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 137.77062245955136, "minX": 1.74327408E12, "maxY": 130849.0, "series": [{"data": [[1.74327432E12, 130849.0], [1.74327426E12, 130718.8], [1.74327408E12, 402.2219020172912], [1.74327414E12, 137.77062245955136]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74327432E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 36.0, "minX": 1.74327408E12, "maxY": 131350.0, "series": [{"data": [[1.74327432E12, 131183.0], [1.74327426E12, 131350.0], [1.74327408E12, 1739.0], [1.74327414E12, 776.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74327432E12, 131183.0], [1.74327426E12, 131350.0], [1.74327408E12, 1249.2], [1.74327414E12, 288.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74327432E12, 131183.0], [1.74327426E12, 131350.0], [1.74327408E12, 1730.2799999999997], [1.74327414E12, 411.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74327432E12, 131183.0], [1.74327426E12, 131350.0], [1.74327408E12, 1574.1999999999996], [1.74327414E12, 329.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74327432E12, 131183.0], [1.74327426E12, 130922.0], [1.74327408E12, 138.0], [1.74327414E12, 36.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74327432E12, 131183.0], [1.74327426E12, 131141.0], [1.74327408E12, 427.0], [1.74327414E12, 183.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74327432E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 132.5, "minX": 1.0, "maxY": 131266.5, "series": [{"data": [[2.0, 131051.0], [101.0, 598.0], [115.0, 448.0], [131.0, 366.0], [132.0, 135.0], [141.0, 356.0], [145.0, 327.0], [149.0, 301.0], [152.0, 297.0], [162.0, 293.5], [161.0, 260.0], [175.0, 254.0], [182.0, 247.5], [177.0, 252.0], [191.0, 233.0], [199.0, 222.0], [198.0, 216.5], [201.0, 224.0], [203.0, 225.0], [206.0, 209.5], [207.0, 210.0], [200.0, 197.0], [211.0, 205.0], [214.0, 202.0], [220.0, 198.0], [219.0, 198.0], [222.0, 198.5], [218.0, 180.0], [223.0, 186.0], [230.0, 185.5], [224.0, 168.0], [232.0, 196.0], [237.0, 181.0], [238.0, 182.5], [236.0, 175.5], [241.0, 179.0], [242.0, 167.5], [243.0, 181.0], [244.0, 174.0], [250.0, 164.0], [251.0, 161.0], [255.0, 152.0], [259.0, 152.0], [268.0, 147.0], [267.0, 156.0], [265.0, 155.0], [271.0, 154.0], [1.0, 131266.5], [279.0, 144.0], [287.0, 139.0], [276.0, 145.5], [284.0, 141.0], [272.0, 141.0], [290.0, 132.5], [288.0, 141.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 290.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 132.0, "minX": 1.0, "maxY": 131264.0, "series": [{"data": [[2.0, 131045.5], [101.0, 462.0], [115.0, 345.0], [131.0, 356.0], [132.0, 134.0], [141.0, 344.0], [145.0, 312.0], [149.0, 295.0], [152.0, 288.0], [162.0, 281.5], [161.0, 253.0], [175.0, 246.0], [182.0, 238.5], [177.0, 246.0], [191.0, 226.0], [199.0, 215.0], [198.0, 208.0], [201.0, 219.0], [203.0, 222.0], [206.0, 203.0], [207.0, 208.0], [200.0, 196.5], [211.0, 203.0], [214.0, 197.5], [220.0, 193.0], [219.0, 190.0], [222.0, 192.5], [218.0, 177.5], [223.0, 181.0], [230.0, 183.0], [224.0, 166.0], [232.0, 195.5], [237.0, 178.0], [238.0, 179.0], [236.0, 171.0], [241.0, 178.0], [242.0, 165.5], [243.0, 177.0], [244.0, 172.0], [250.0, 159.0], [251.0, 158.0], [255.0, 150.0], [259.0, 149.0], [268.0, 145.0], [267.0, 154.0], [265.0, 152.0], [271.0, 152.0], [1.0, 131264.0], [279.0, 140.0], [287.0, 137.0], [276.0, 142.0], [284.0, 136.5], [272.0, 136.0], [290.0, 132.0], [288.0, 139.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 290.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 6.55, "minX": 1.74327408E12, "maxY": 208.45, "series": [{"data": [[1.74327408E12, 6.55], [1.74327414E12, 208.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74327414E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74327408E12, "maxY": 208.78333333333333, "series": [{"data": [[1.74327408E12, 2.966666666666667], [1.74327414E12, 0.3333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.74327432E12, 0.016666666666666666], [1.74327426E12, 0.08333333333333333], [1.74327408E12, 2.816666666666667], [1.74327414E12, 208.78333333333333]], "isOverall": false, "label": "302", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74327432E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74327408E12, "maxY": 209.11666666666667, "series": [{"data": [[1.74327432E12, 0.016666666666666666], [1.74327426E12, 0.08333333333333333], [1.74327408E12, 5.783333333333333], [1.74327414E12, 209.11666666666667]], "isOverall": false, "label": "Google-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74327432E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74327408E12, "maxY": 209.11666666666667, "series": [{"data": [[1.74327432E12, 0.016666666666666666], [1.74327426E12, 0.08333333333333333], [1.74327408E12, 5.783333333333333], [1.74327414E12, 209.11666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74327432E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

