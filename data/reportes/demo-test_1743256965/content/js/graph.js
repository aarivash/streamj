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
        data: {"result": {"minY": 36.0, "minX": 0.0, "maxY": 131602.0, "series": [{"data": [[0.0, 36.0], [0.1, 37.0], [0.2, 38.0], [0.3, 39.0], [0.4, 39.0], [0.5, 40.0], [0.6, 40.0], [0.7, 40.0], [0.8, 41.0], [0.9, 41.0], [1.0, 41.0], [1.1, 41.0], [1.2, 42.0], [1.3, 42.0], [1.4, 42.0], [1.5, 42.0], [1.6, 43.0], [1.7, 43.0], [1.8, 43.0], [1.9, 43.0], [2.0, 44.0], [2.1, 44.0], [2.2, 44.0], [2.3, 44.0], [2.4, 44.0], [2.5, 45.0], [2.6, 45.0], [2.7, 45.0], [2.8, 45.0], [2.9, 45.0], [3.0, 45.0], [3.1, 46.0], [3.2, 46.0], [3.3, 46.0], [3.4, 46.0], [3.5, 46.0], [3.6, 46.0], [3.7, 47.0], [3.8, 47.0], [3.9, 47.0], [4.0, 47.0], [4.1, 47.0], [4.2, 47.0], [4.3, 47.0], [4.4, 48.0], [4.5, 48.0], [4.6, 48.0], [4.7, 48.0], [4.8, 48.0], [4.9, 48.0], [5.0, 48.0], [5.1, 48.0], [5.2, 49.0], [5.3, 49.0], [5.4, 49.0], [5.5, 49.0], [5.6, 49.0], [5.7, 49.0], [5.8, 49.0], [5.9, 49.0], [6.0, 49.0], [6.1, 50.0], [6.2, 50.0], [6.3, 50.0], [6.4, 50.0], [6.5, 50.0], [6.6, 50.0], [6.7, 50.0], [6.8, 50.0], [6.9, 50.0], [7.0, 50.0], [7.1, 50.0], [7.2, 51.0], [7.3, 51.0], [7.4, 51.0], [7.5, 51.0], [7.6, 51.0], [7.7, 51.0], [7.8, 51.0], [7.9, 51.0], [8.0, 51.0], [8.1, 52.0], [8.2, 52.0], [8.3, 52.0], [8.4, 52.0], [8.5, 52.0], [8.6, 52.0], [8.7, 52.0], [8.8, 52.0], [8.9, 52.0], [9.0, 52.0], [9.1, 52.0], [9.2, 53.0], [9.3, 53.0], [9.4, 53.0], [9.5, 53.0], [9.6, 53.0], [9.7, 53.0], [9.8, 53.0], [9.9, 53.0], [10.0, 53.0], [10.1, 53.0], [10.2, 53.0], [10.3, 53.0], [10.4, 54.0], [10.5, 54.0], [10.6, 54.0], [10.7, 54.0], [10.8, 54.0], [10.9, 54.0], [11.0, 54.0], [11.1, 54.0], [11.2, 54.0], [11.3, 54.0], [11.4, 54.0], [11.5, 54.0], [11.6, 55.0], [11.7, 55.0], [11.8, 55.0], [11.9, 55.0], [12.0, 55.0], [12.1, 55.0], [12.2, 55.0], [12.3, 55.0], [12.4, 55.0], [12.5, 55.0], [12.6, 55.0], [12.7, 55.0], [12.8, 55.0], [12.9, 56.0], [13.0, 56.0], [13.1, 56.0], [13.2, 56.0], [13.3, 56.0], [13.4, 56.0], [13.5, 56.0], [13.6, 56.0], [13.7, 56.0], [13.8, 56.0], [13.9, 56.0], [14.0, 56.0], [14.1, 57.0], [14.2, 57.0], [14.3, 57.0], [14.4, 57.0], [14.5, 57.0], [14.6, 57.0], [14.7, 57.0], [14.8, 57.0], [14.9, 57.0], [15.0, 57.0], [15.1, 57.0], [15.2, 57.0], [15.3, 57.0], [15.4, 57.0], [15.5, 58.0], [15.6, 58.0], [15.7, 58.0], [15.8, 58.0], [15.9, 58.0], [16.0, 58.0], [16.1, 58.0], [16.2, 58.0], [16.3, 58.0], [16.4, 58.0], [16.5, 58.0], [16.6, 58.0], [16.7, 58.0], [16.8, 59.0], [16.9, 59.0], [17.0, 59.0], [17.1, 59.0], [17.2, 59.0], [17.3, 59.0], [17.4, 59.0], [17.5, 59.0], [17.6, 59.0], [17.7, 59.0], [17.8, 59.0], [17.9, 59.0], [18.0, 59.0], [18.1, 60.0], [18.2, 60.0], [18.3, 60.0], [18.4, 60.0], [18.5, 60.0], [18.6, 60.0], [18.7, 60.0], [18.8, 60.0], [18.9, 60.0], [19.0, 60.0], [19.1, 60.0], [19.2, 60.0], [19.3, 60.0], [19.4, 60.0], [19.5, 61.0], [19.6, 61.0], [19.7, 61.0], [19.8, 61.0], [19.9, 61.0], [20.0, 61.0], [20.1, 61.0], [20.2, 61.0], [20.3, 61.0], [20.4, 61.0], [20.5, 61.0], [20.6, 61.0], [20.7, 61.0], [20.8, 62.0], [20.9, 62.0], [21.0, 62.0], [21.1, 62.0], [21.2, 62.0], [21.3, 62.0], [21.4, 62.0], [21.5, 62.0], [21.6, 62.0], [21.7, 62.0], [21.8, 62.0], [21.9, 62.0], [22.0, 62.0], [22.1, 63.0], [22.2, 63.0], [22.3, 63.0], [22.4, 63.0], [22.5, 63.0], [22.6, 63.0], [22.7, 63.0], [22.8, 63.0], [22.9, 63.0], [23.0, 63.0], [23.1, 63.0], [23.2, 63.0], [23.3, 63.0], [23.4, 63.0], [23.5, 64.0], [23.6, 64.0], [23.7, 64.0], [23.8, 64.0], [23.9, 64.0], [24.0, 64.0], [24.1, 64.0], [24.2, 64.0], [24.3, 64.0], [24.4, 64.0], [24.5, 64.0], [24.6, 64.0], [24.7, 64.0], [24.8, 65.0], [24.9, 65.0], [25.0, 65.0], [25.1, 65.0], [25.2, 65.0], [25.3, 65.0], [25.4, 65.0], [25.5, 65.0], [25.6, 65.0], [25.7, 65.0], [25.8, 65.0], [25.9, 66.0], [26.0, 66.0], [26.1, 66.0], [26.2, 66.0], [26.3, 66.0], [26.4, 66.0], [26.5, 66.0], [26.6, 66.0], [26.7, 66.0], [26.8, 66.0], [26.9, 66.0], [27.0, 67.0], [27.1, 67.0], [27.2, 67.0], [27.3, 67.0], [27.4, 67.0], [27.5, 67.0], [27.6, 67.0], [27.7, 67.0], [27.8, 67.0], [27.9, 67.0], [28.0, 67.0], [28.1, 68.0], [28.2, 68.0], [28.3, 68.0], [28.4, 68.0], [28.5, 68.0], [28.6, 68.0], [28.7, 68.0], [28.8, 68.0], [28.9, 68.0], [29.0, 68.0], [29.1, 68.0], [29.2, 69.0], [29.3, 69.0], [29.4, 69.0], [29.5, 69.0], [29.6, 69.0], [29.7, 69.0], [29.8, 69.0], [29.9, 69.0], [30.0, 69.0], [30.1, 69.0], [30.2, 70.0], [30.3, 70.0], [30.4, 70.0], [30.5, 70.0], [30.6, 70.0], [30.7, 70.0], [30.8, 70.0], [30.9, 70.0], [31.0, 70.0], [31.1, 70.0], [31.2, 71.0], [31.3, 71.0], [31.4, 71.0], [31.5, 71.0], [31.6, 71.0], [31.7, 71.0], [31.8, 71.0], [31.9, 71.0], [32.0, 71.0], [32.1, 71.0], [32.2, 72.0], [32.3, 72.0], [32.4, 72.0], [32.5, 72.0], [32.6, 72.0], [32.7, 72.0], [32.8, 72.0], [32.9, 72.0], [33.0, 72.0], [33.1, 73.0], [33.2, 73.0], [33.3, 73.0], [33.4, 73.0], [33.5, 73.0], [33.6, 73.0], [33.7, 73.0], [33.8, 73.0], [33.9, 73.0], [34.0, 74.0], [34.1, 74.0], [34.2, 74.0], [34.3, 74.0], [34.4, 74.0], [34.5, 74.0], [34.6, 74.0], [34.7, 74.0], [34.8, 74.0], [34.9, 75.0], [35.0, 75.0], [35.1, 75.0], [35.2, 75.0], [35.3, 75.0], [35.4, 75.0], [35.5, 75.0], [35.6, 75.0], [35.7, 76.0], [35.8, 76.0], [35.9, 76.0], [36.0, 76.0], [36.1, 76.0], [36.2, 76.0], [36.3, 76.0], [36.4, 76.0], [36.5, 77.0], [36.6, 77.0], [36.7, 77.0], [36.8, 77.0], [36.9, 77.0], [37.0, 77.0], [37.1, 77.0], [37.2, 77.0], [37.3, 78.0], [37.4, 78.0], [37.5, 78.0], [37.6, 78.0], [37.7, 78.0], [37.8, 78.0], [37.9, 78.0], [38.0, 79.0], [38.1, 79.0], [38.2, 79.0], [38.3, 79.0], [38.4, 79.0], [38.5, 79.0], [38.6, 79.0], [38.7, 80.0], [38.8, 80.0], [38.9, 80.0], [39.0, 80.0], [39.1, 80.0], [39.2, 80.0], [39.3, 81.0], [39.4, 81.0], [39.5, 81.0], [39.6, 81.0], [39.7, 81.0], [39.8, 82.0], [39.9, 82.0], [40.0, 82.0], [40.1, 82.0], [40.2, 82.0], [40.3, 82.0], [40.4, 82.0], [40.5, 83.0], [40.6, 83.0], [40.7, 83.0], [40.8, 83.0], [40.9, 83.0], [41.0, 83.0], [41.1, 84.0], [41.2, 84.0], [41.3, 84.0], [41.4, 84.0], [41.5, 84.0], [41.6, 84.0], [41.7, 84.0], [41.8, 85.0], [41.9, 85.0], [42.0, 85.0], [42.1, 85.0], [42.2, 85.0], [42.3, 86.0], [42.4, 86.0], [42.5, 86.0], [42.6, 86.0], [42.7, 86.0], [42.8, 87.0], [42.9, 87.0], [43.0, 87.0], [43.1, 87.0], [43.2, 88.0], [43.3, 88.0], [43.4, 88.0], [43.5, 88.0], [43.6, 88.0], [43.7, 89.0], [43.8, 89.0], [43.9, 89.0], [44.0, 89.0], [44.1, 90.0], [44.2, 90.0], [44.3, 90.0], [44.4, 90.0], [44.5, 91.0], [44.6, 91.0], [44.7, 91.0], [44.8, 91.0], [44.9, 92.0], [45.0, 92.0], [45.1, 92.0], [45.2, 92.0], [45.3, 93.0], [45.4, 93.0], [45.5, 93.0], [45.6, 93.0], [45.7, 94.0], [45.8, 94.0], [45.9, 94.0], [46.0, 94.0], [46.1, 95.0], [46.2, 95.0], [46.3, 95.0], [46.4, 96.0], [46.5, 96.0], [46.6, 96.0], [46.7, 97.0], [46.8, 97.0], [46.9, 97.0], [47.0, 98.0], [47.1, 98.0], [47.2, 98.0], [47.3, 99.0], [47.4, 99.0], [47.5, 99.0], [47.6, 100.0], [47.7, 100.0], [47.8, 100.0], [47.9, 101.0], [48.0, 101.0], [48.1, 102.0], [48.2, 102.0], [48.3, 103.0], [48.4, 103.0], [48.5, 104.0], [48.6, 104.0], [48.7, 104.0], [48.8, 105.0], [48.9, 105.0], [49.0, 106.0], [49.1, 106.0], [49.2, 107.0], [49.3, 108.0], [49.4, 108.0], [49.5, 109.0], [49.6, 109.0], [49.7, 110.0], [49.8, 110.0], [49.9, 111.0], [50.0, 111.0], [50.1, 112.0], [50.2, 113.0], [50.3, 113.0], [50.4, 114.0], [50.5, 115.0], [50.6, 115.0], [50.7, 116.0], [50.8, 117.0], [50.9, 118.0], [51.0, 119.0], [51.1, 119.0], [51.2, 120.0], [51.3, 121.0], [51.4, 121.0], [51.5, 122.0], [51.6, 123.0], [51.7, 124.0], [51.8, 124.0], [51.9, 125.0], [52.0, 127.0], [52.1, 128.0], [52.2, 129.0], [52.3, 130.0], [52.4, 131.0], [52.5, 132.0], [52.6, 134.0], [52.7, 135.0], [52.8, 137.0], [52.9, 138.0], [53.0, 139.0], [53.1, 141.0], [53.2, 142.0], [53.3, 144.0], [53.4, 146.0], [53.5, 147.0], [53.6, 149.0], [53.7, 151.0], [53.8, 154.0], [53.9, 156.0], [54.0, 159.0], [54.1, 161.0], [54.2, 164.0], [54.3, 167.0], [54.4, 171.0], [54.5, 176.0], [54.6, 182.0], [54.7, 188.0], [54.8, 196.0], [54.9, 210.0], [55.0, 221.0], [55.1, 224.0], [55.2, 225.0], [55.3, 226.0], [55.4, 227.0], [55.5, 227.0], [55.6, 228.0], [55.7, 229.0], [55.8, 229.0], [55.9, 230.0], [56.0, 230.0], [56.1, 231.0], [56.2, 232.0], [56.3, 233.0], [56.4, 234.0], [56.5, 234.0], [56.6, 235.0], [56.7, 236.0], [56.8, 236.0], [56.9, 237.0], [57.0, 238.0], [57.1, 238.0], [57.2, 239.0], [57.3, 240.0], [57.4, 240.0], [57.5, 241.0], [57.6, 242.0], [57.7, 242.0], [57.8, 243.0], [57.9, 244.0], [58.0, 244.0], [58.1, 245.0], [58.2, 245.0], [58.3, 246.0], [58.4, 247.0], [58.5, 248.0], [58.6, 248.0], [58.7, 249.0], [58.8, 250.0], [58.9, 250.0], [59.0, 251.0], [59.1, 251.0], [59.2, 252.0], [59.3, 253.0], [59.4, 254.0], [59.5, 254.0], [59.6, 255.0], [59.7, 256.0], [59.8, 257.0], [59.9, 257.0], [60.0, 258.0], [60.1, 258.0], [60.2, 259.0], [60.3, 260.0], [60.4, 261.0], [60.5, 261.0], [60.6, 262.0], [60.7, 262.0], [60.8, 263.0], [60.9, 264.0], [61.0, 264.0], [61.1, 265.0], [61.2, 266.0], [61.3, 267.0], [61.4, 268.0], [61.5, 269.0], [61.6, 269.0], [61.7, 270.0], [61.8, 271.0], [61.9, 271.0], [62.0, 272.0], [62.1, 273.0], [62.2, 274.0], [62.3, 274.0], [62.4, 275.0], [62.5, 275.0], [62.6, 276.0], [62.7, 277.0], [62.8, 277.0], [62.9, 278.0], [63.0, 278.0], [63.1, 279.0], [63.2, 280.0], [63.3, 281.0], [63.4, 281.0], [63.5, 282.0], [63.6, 283.0], [63.7, 284.0], [63.8, 285.0], [63.9, 285.0], [64.0, 286.0], [64.1, 287.0], [64.2, 287.0], [64.3, 288.0], [64.4, 289.0], [64.5, 290.0], [64.6, 290.0], [64.7, 291.0], [64.8, 292.0], [64.9, 292.0], [65.0, 293.0], [65.1, 294.0], [65.2, 295.0], [65.3, 295.0], [65.4, 296.0], [65.5, 297.0], [65.6, 297.0], [65.7, 298.0], [65.8, 299.0], [65.9, 300.0], [66.0, 300.0], [66.1, 301.0], [66.2, 302.0], [66.3, 303.0], [66.4, 303.0], [66.5, 304.0], [66.6, 305.0], [66.7, 305.0], [66.8, 306.0], [66.9, 307.0], [67.0, 307.0], [67.1, 308.0], [67.2, 308.0], [67.3, 309.0], [67.4, 310.0], [67.5, 311.0], [67.6, 311.0], [67.7, 312.0], [67.8, 312.0], [67.9, 313.0], [68.0, 313.0], [68.1, 314.0], [68.2, 315.0], [68.3, 315.0], [68.4, 316.0], [68.5, 317.0], [68.6, 317.0], [68.7, 318.0], [68.8, 319.0], [68.9, 319.0], [69.0, 320.0], [69.1, 321.0], [69.2, 321.0], [69.3, 322.0], [69.4, 323.0], [69.5, 323.0], [69.6, 324.0], [69.7, 325.0], [69.8, 325.0], [69.9, 326.0], [70.0, 327.0], [70.1, 327.0], [70.2, 328.0], [70.3, 328.0], [70.4, 329.0], [70.5, 329.0], [70.6, 330.0], [70.7, 331.0], [70.8, 331.0], [70.9, 332.0], [71.0, 332.0], [71.1, 333.0], [71.2, 334.0], [71.3, 334.0], [71.4, 335.0], [71.5, 336.0], [71.6, 336.0], [71.7, 337.0], [71.8, 338.0], [71.9, 338.0], [72.0, 339.0], [72.1, 340.0], [72.2, 340.0], [72.3, 341.0], [72.4, 342.0], [72.5, 342.0], [72.6, 343.0], [72.7, 344.0], [72.8, 344.0], [72.9, 345.0], [73.0, 346.0], [73.1, 346.0], [73.2, 347.0], [73.3, 348.0], [73.4, 348.0], [73.5, 349.0], [73.6, 350.0], [73.7, 350.0], [73.8, 351.0], [73.9, 352.0], [74.0, 353.0], [74.1, 353.0], [74.2, 354.0], [74.3, 355.0], [74.4, 355.0], [74.5, 356.0], [74.6, 357.0], [74.7, 357.0], [74.8, 358.0], [74.9, 359.0], [75.0, 360.0], [75.1, 360.0], [75.2, 361.0], [75.3, 362.0], [75.4, 362.0], [75.5, 363.0], [75.6, 364.0], [75.7, 364.0], [75.8, 365.0], [75.9, 366.0], [76.0, 366.0], [76.1, 367.0], [76.2, 368.0], [76.3, 368.0], [76.4, 369.0], [76.5, 370.0], [76.6, 370.0], [76.7, 371.0], [76.8, 372.0], [76.9, 372.0], [77.0, 373.0], [77.1, 374.0], [77.2, 374.0], [77.3, 375.0], [77.4, 376.0], [77.5, 376.0], [77.6, 377.0], [77.7, 378.0], [77.8, 378.0], [77.9, 379.0], [78.0, 380.0], [78.1, 381.0], [78.2, 381.0], [78.3, 382.0], [78.4, 383.0], [78.5, 384.0], [78.6, 385.0], [78.7, 385.0], [78.8, 386.0], [78.9, 387.0], [79.0, 387.0], [79.1, 388.0], [79.2, 389.0], [79.3, 389.0], [79.4, 390.0], [79.5, 391.0], [79.6, 391.0], [79.7, 392.0], [79.8, 393.0], [79.9, 394.0], [80.0, 394.0], [80.1, 395.0], [80.2, 395.0], [80.3, 396.0], [80.4, 397.0], [80.5, 397.0], [80.6, 398.0], [80.7, 398.0], [80.8, 399.0], [80.9, 400.0], [81.0, 400.0], [81.1, 401.0], [81.2, 402.0], [81.3, 402.0], [81.4, 403.0], [81.5, 404.0], [81.6, 405.0], [81.7, 405.0], [81.8, 406.0], [81.9, 406.0], [82.0, 407.0], [82.1, 407.0], [82.2, 408.0], [82.3, 409.0], [82.4, 409.0], [82.5, 410.0], [82.6, 410.0], [82.7, 411.0], [82.8, 412.0], [82.9, 412.0], [83.0, 413.0], [83.1, 414.0], [83.2, 414.0], [83.3, 415.0], [83.4, 415.0], [83.5, 416.0], [83.6, 416.0], [83.7, 417.0], [83.8, 417.0], [83.9, 418.0], [84.0, 419.0], [84.1, 420.0], [84.2, 420.0], [84.3, 421.0], [84.4, 422.0], [84.5, 422.0], [84.6, 423.0], [84.7, 423.0], [84.8, 425.0], [84.9, 425.0], [85.0, 426.0], [85.1, 427.0], [85.2, 427.0], [85.3, 428.0], [85.4, 429.0], [85.5, 429.0], [85.6, 430.0], [85.7, 431.0], [85.8, 431.0], [85.9, 432.0], [86.0, 433.0], [86.1, 434.0], [86.2, 434.0], [86.3, 435.0], [86.4, 436.0], [86.5, 436.0], [86.6, 437.0], [86.7, 437.0], [86.8, 438.0], [86.9, 438.0], [87.0, 439.0], [87.1, 440.0], [87.2, 441.0], [87.3, 441.0], [87.4, 442.0], [87.5, 443.0], [87.6, 443.0], [87.7, 444.0], [87.8, 445.0], [87.9, 446.0], [88.0, 446.0], [88.1, 447.0], [88.2, 448.0], [88.3, 448.0], [88.4, 449.0], [88.5, 449.0], [88.6, 450.0], [88.7, 451.0], [88.8, 452.0], [88.9, 452.0], [89.0, 453.0], [89.1, 454.0], [89.2, 454.0], [89.3, 455.0], [89.4, 456.0], [89.5, 456.0], [89.6, 457.0], [89.7, 458.0], [89.8, 458.0], [89.9, 459.0], [90.0, 460.0], [90.1, 460.0], [90.2, 461.0], [90.3, 461.0], [90.4, 462.0], [90.5, 463.0], [90.6, 463.0], [90.7, 464.0], [90.8, 464.0], [90.9, 465.0], [91.0, 466.0], [91.1, 467.0], [91.2, 467.0], [91.3, 468.0], [91.4, 468.0], [91.5, 469.0], [91.6, 470.0], [91.7, 470.0], [91.8, 471.0], [91.9, 472.0], [92.0, 473.0], [92.1, 473.0], [92.2, 474.0], [92.3, 475.0], [92.4, 475.0], [92.5, 476.0], [92.6, 476.0], [92.7, 477.0], [92.8, 478.0], [92.9, 479.0], [93.0, 479.0], [93.1, 480.0], [93.2, 481.0], [93.3, 482.0], [93.4, 482.0], [93.5, 483.0], [93.6, 484.0], [93.7, 484.0], [93.8, 485.0], [93.9, 486.0], [94.0, 486.0], [94.1, 487.0], [94.2, 487.0], [94.3, 488.0], [94.4, 488.0], [94.5, 489.0], [94.6, 490.0], [94.7, 490.0], [94.8, 491.0], [94.9, 492.0], [95.0, 492.0], [95.1, 493.0], [95.2, 494.0], [95.3, 494.0], [95.4, 495.0], [95.5, 495.0], [95.6, 496.0], [95.7, 496.0], [95.8, 497.0], [95.9, 498.0], [96.0, 499.0], [96.1, 499.0], [96.2, 500.0], [96.3, 501.0], [96.4, 502.0], [96.5, 502.0], [96.6, 503.0], [96.7, 504.0], [96.8, 505.0], [96.9, 505.0], [97.0, 506.0], [97.1, 506.0], [97.2, 507.0], [97.3, 507.0], [97.4, 508.0], [97.5, 509.0], [97.6, 509.0], [97.7, 510.0], [97.8, 510.0], [97.9, 511.0], [98.0, 512.0], [98.1, 512.0], [98.2, 513.0], [98.3, 513.0], [98.4, 514.0], [98.5, 515.0], [98.6, 515.0], [98.7, 516.0], [98.8, 517.0], [98.9, 518.0], [99.0, 519.0], [99.1, 520.0], [99.2, 520.0], [99.3, 521.0], [99.4, 522.0], [99.5, 522.0], [99.6, 523.0], [99.7, 524.0], [99.8, 525.0], [99.9, 529.0], [100.0, 131602.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 11848.0, "series": [{"data": [[0.0, 11848.0], [131600.0, 1.0], [600.0, 2.0], [700.0, 3.0], [800.0, 4.0], [200.0, 2749.0], [900.0, 2.0], [300.0, 3744.0], [400.0, 3806.0], [100.0, 1822.0], [500.0, 946.0], [130900.0, 1.0], [131000.0, 1.0], [130500.0, 1.0], [130100.0, 1.0], [130400.0, 1.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 131600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 23997.0, "series": [{"data": [[0.0, 23997.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 929.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.74325692E12, "maxY": 20.0, "series": [{"data": [[1.74325722E12, 19.927839453458596], [1.74325704E12, 20.0], [1.7432571E12, 20.0], [1.74325692E12, 20.0], [1.74325698E12, 20.0], [1.74325728E12, 1.0], [1.74325716E12, 20.0]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74325728E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 236.03813270180265, "minX": 1.0, "maxY": 130405.0, "series": [{"data": [[8.0, 505.0], [2.0, 512.0], [9.0, 296.0], [10.0, 264.0], [11.0, 395.0], [12.0, 328.0], [3.0, 523.0], [13.0, 291.0], [14.0, 337.0], [15.0, 248.0], [16.0, 483.0], [4.0, 485.0], [1.0, 130405.0], [18.0, 362.0], [19.0, 429.0], [20.0, 236.03813270180265], [6.0, 476.0], [7.0, 333.0]], "isOverall": false, "label": "Google", "isController": false}, {"data": [[19.992459489812287, 241.3736563452595]], "isOverall": false, "label": "Google-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1.8666666666666667, "minX": 1.74325692E12, "maxY": 347232.11666666664, "series": [{"data": [[1.74325722E12, 34232.23333333333], [1.74325704E12, 37082.48333333333], [1.7432571E12, 42666.05], [1.74325692E12, 111540.25], [1.74325698E12, 347232.11666666664], [1.74325728E12, 14.616666666666667], [1.74325716E12, 42739.13333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74325722E12, 4371.733333333334], [1.74325704E12, 4735.733333333334], [1.7432571E12, 5448.8], [1.74325692E12, 3119.2], [1.74325698E12, 23404.266666666666], [1.74325728E12, 1.8666666666666667], [1.74325716E12, 5458.133333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74325728E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 79.03971925346956, "minX": 1.74325692E12, "maxY": 130405.0, "series": [{"data": [[1.74325722E12, 431.0614859094794], [1.74325704E12, 378.37288135593303], [1.7432571E12, 554.6628982528257], [1.74325692E12, 123.95272292040698], [1.74325698E12, 79.03971925346956], [1.74325728E12, 130405.0], [1.74325716E12, 376.490766073871]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74325728E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 77.71279310894866, "minX": 1.74325692E12, "maxY": 130402.0, "series": [{"data": [[1.74325722E12, 430.21520068317636], [1.74325704E12, 377.57272368939573], [1.7432571E12, 553.8324768756422], [1.74325692E12, 117.51466187911414], [1.74325698E12, 77.71279310894866], [1.74325728E12, 130402.0], [1.74325716E12, 375.6614227086184]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74325728E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 15.286593707250312, "minX": 1.74325692E12, "maxY": 130169.0, "series": [{"data": [[1.74325722E12, 70.69171648163953], [1.74325704E12, 15.456444619629467], [1.7432571E12, 194.44809866392632], [1.74325692E12, 82.10233393177747], [1.74325698E12, 39.495374062849024], [1.74325728E12, 130169.0], [1.74325716E12, 15.286593707250312]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74325728E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 36.0, "minX": 1.74325692E12, "maxY": 131602.0, "series": [{"data": [[1.74325722E12, 130131.0], [1.74325704E12, 701.0], [1.7432571E12, 131602.0], [1.74325692E12, 929.0], [1.74325698E12, 533.0], [1.74325728E12, 130405.0], [1.74325716E12, 536.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74325722E12, 494.0], [1.74325704E12, 497.0], [1.7432571E12, 495.0], [1.74325692E12, 178.79999999999995], [1.74325698E12, 102.0], [1.74325728E12, 130405.0], [1.74325716E12, 496.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74325722E12, 522.0], [1.74325704E12, 522.0], [1.7432571E12, 523.0], [1.74325692E12, 314.75999999999885], [1.74325698E12, 435.22000000000116], [1.74325728E12, 130405.0], [1.74325716E12, 522.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74325722E12, 510.0], [1.74325704E12, 511.0], [1.7432571E12, 509.0], [1.74325692E12, 218.0], [1.74325698E12, 133.0], [1.74325728E12, 130405.0], [1.74325716E12, 510.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74325722E12, 219.0], [1.74325704E12, 221.0], [1.7432571E12, 222.0], [1.74325692E12, 41.0], [1.74325698E12, 36.0], [1.74325728E12, 130405.0], [1.74325716E12, 221.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74325722E12, 376.0], [1.74325704E12, 382.0], [1.7432571E12, 375.0], [1.74325692E12, 109.0], [1.74325698E12, 65.0], [1.74325728E12, 130405.0], [1.74325716E12, 376.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74325728E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 55.0, "minX": 1.0, "maxY": 130405.0, "series": [{"data": [[36.0, 424.0], [39.0, 410.0], [38.0, 396.0], [41.0, 389.0], [40.0, 394.0], [43.0, 380.5], [42.0, 377.5], [45.0, 377.0], [44.0, 384.0], [46.0, 386.0], [47.0, 384.0], [48.0, 375.0], [49.0, 374.5], [51.0, 366.0], [50.0, 376.0], [52.0, 361.0], [53.0, 360.0], [54.0, 367.5], [55.0, 357.0], [56.0, 345.0], [62.0, 229.0], [103.0, 188.0], [116.0, 56.0], [130.0, 149.5], [154.0, 123.0], [158.0, 103.0], [156.0, 114.5], [166.0, 100.0], [173.0, 105.0], [172.0, 95.5], [169.0, 83.0], [180.0, 108.5], [177.0, 96.0], [179.0, 92.0], [188.0, 90.0], [190.0, 91.0], [197.0, 88.0], [208.0, 80.0], [211.0, 81.0], [209.0, 77.0], [222.0, 77.5], [221.0, 69.0], [231.0, 75.0], [228.0, 72.0], [226.0, 57.0], [238.0, 70.5], [237.0, 66.0], [236.0, 69.0], [234.0, 71.0], [245.0, 68.0], [246.0, 66.0], [240.0, 68.5], [244.0, 66.5], [242.0, 66.5], [248.0, 64.0], [253.0, 64.0], [251.0, 63.0], [250.0, 63.0], [269.0, 56.0], [257.0, 63.0], [271.0, 61.0], [270.0, 57.0], [261.0, 63.0], [267.0, 58.0], [263.0, 56.0], [265.0, 57.0], [260.0, 57.0], [1.0, 130405.0], [266.0, 56.0], [268.0, 57.0], [259.0, 58.0], [279.0, 55.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 279.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 54.0, "minX": 1.0, "maxY": 130402.0, "series": [{"data": [[36.0, 423.0], [39.0, 408.5], [38.0, 394.0], [41.0, 388.0], [40.0, 393.0], [43.0, 379.5], [42.0, 376.5], [45.0, 377.0], [44.0, 382.5], [46.0, 385.0], [47.0, 383.5], [48.0, 374.5], [49.0, 374.0], [51.0, 365.0], [50.0, 375.0], [52.0, 360.5], [53.0, 359.5], [54.0, 366.5], [55.0, 356.5], [56.0, 344.0], [62.0, 182.0], [103.0, 170.0], [116.0, 55.0], [130.0, 136.5], [154.0, 121.0], [158.0, 101.0], [156.0, 111.0], [166.0, 97.5], [173.0, 100.0], [172.0, 93.0], [169.0, 82.0], [180.0, 104.0], [177.0, 94.0], [179.0, 90.0], [188.0, 87.0], [190.0, 90.0], [197.0, 86.0], [208.0, 78.0], [211.0, 79.0], [209.0, 76.0], [222.0, 75.0], [221.0, 68.0], [231.0, 73.0], [228.0, 71.0], [226.0, 55.0], [238.0, 69.0], [237.0, 65.0], [236.0, 67.0], [234.0, 70.0], [245.0, 67.0], [246.0, 64.0], [240.0, 67.0], [244.0, 65.5], [242.0, 65.0], [248.0, 63.0], [253.0, 63.0], [251.0, 61.0], [250.0, 61.0], [269.0, 55.0], [257.0, 62.0], [271.0, 60.0], [270.0, 56.0], [261.0, 62.0], [267.0, 57.0], [263.0, 55.0], [265.0, 56.0], [260.0, 56.0], [1.0, 130402.0], [266.0, 55.0], [268.0, 56.0], [259.0, 57.0], [279.0, 54.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 279.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 28.166666666666668, "minX": 1.74325692E12, "maxY": 208.98333333333332, "series": [{"data": [[1.74325722E12, 38.71666666666667], [1.74325704E12, 42.28333333333333], [1.7432571E12, 48.65], [1.74325692E12, 28.166666666666668], [1.74325698E12, 208.98333333333332], [1.74325716E12, 48.733333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74325722E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74325692E12, "maxY": 208.6, "series": [{"data": [[1.74325692E12, 4.0], [1.74325698E12, 0.36666666666666664]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.74325722E12, 39.03333333333333], [1.74325704E12, 42.28333333333333], [1.7432571E12, 48.65], [1.74325692E12, 23.85], [1.74325698E12, 208.6], [1.74325728E12, 0.016666666666666666], [1.74325716E12, 48.733333333333334]], "isOverall": false, "label": "302", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74325728E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74325692E12, "maxY": 208.96666666666667, "series": [{"data": [[1.74325722E12, 39.03333333333333], [1.74325704E12, 42.28333333333333], [1.7432571E12, 48.65], [1.74325692E12, 27.85], [1.74325698E12, 208.96666666666667], [1.74325728E12, 0.016666666666666666], [1.74325716E12, 48.733333333333334]], "isOverall": false, "label": "Google-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74325728E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74325692E12, "maxY": 208.96666666666667, "series": [{"data": [[1.74325722E12, 39.03333333333333], [1.74325704E12, 42.28333333333333], [1.7432571E12, 48.65], [1.74325692E12, 27.85], [1.74325698E12, 208.96666666666667], [1.74325728E12, 0.016666666666666666], [1.74325716E12, 48.733333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74325728E12, "title": "Total Transactions Per Second"}},
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

