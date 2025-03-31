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
        data: {"result": {"minY": 35.0, "minX": 0.0, "maxY": 130931.0, "series": [{"data": [[0.0, 35.0], [0.1, 37.0], [0.2, 37.0], [0.3, 38.0], [0.4, 38.0], [0.5, 38.0], [0.6, 38.0], [0.7, 38.0], [0.8, 39.0], [0.9, 39.0], [1.0, 39.0], [1.1, 39.0], [1.2, 40.0], [1.3, 40.0], [1.4, 40.0], [1.5, 40.0], [1.6, 40.0], [1.7, 40.0], [1.8, 40.0], [1.9, 41.0], [2.0, 41.0], [2.1, 41.0], [2.2, 41.0], [2.3, 41.0], [2.4, 41.0], [2.5, 41.0], [2.6, 41.0], [2.7, 42.0], [2.8, 42.0], [2.9, 42.0], [3.0, 42.0], [3.1, 42.0], [3.2, 42.0], [3.3, 42.0], [3.4, 42.0], [3.5, 43.0], [3.6, 43.0], [3.7, 43.0], [3.8, 43.0], [3.9, 43.0], [4.0, 43.0], [4.1, 43.0], [4.2, 43.0], [4.3, 43.0], [4.4, 43.0], [4.5, 44.0], [4.6, 44.0], [4.7, 44.0], [4.8, 44.0], [4.9, 44.0], [5.0, 44.0], [5.1, 44.0], [5.2, 44.0], [5.3, 44.0], [5.4, 45.0], [5.5, 45.0], [5.6, 45.0], [5.7, 45.0], [5.8, 45.0], [5.9, 45.0], [6.0, 45.0], [6.1, 45.0], [6.2, 45.0], [6.3, 45.0], [6.4, 45.0], [6.5, 45.0], [6.6, 45.0], [6.7, 46.0], [6.8, 46.0], [6.9, 46.0], [7.0, 46.0], [7.1, 46.0], [7.2, 46.0], [7.3, 46.0], [7.4, 46.0], [7.5, 46.0], [7.6, 46.0], [7.7, 46.0], [7.8, 46.0], [7.9, 47.0], [8.0, 47.0], [8.1, 47.0], [8.2, 47.0], [8.3, 47.0], [8.4, 47.0], [8.5, 47.0], [8.6, 47.0], [8.7, 47.0], [8.8, 47.0], [8.9, 47.0], [9.0, 47.0], [9.1, 47.0], [9.2, 47.0], [9.3, 48.0], [9.4, 48.0], [9.5, 48.0], [9.6, 48.0], [9.7, 48.0], [9.8, 48.0], [9.9, 48.0], [10.0, 48.0], [10.1, 48.0], [10.2, 48.0], [10.3, 48.0], [10.4, 48.0], [10.5, 48.0], [10.6, 48.0], [10.7, 48.0], [10.8, 49.0], [10.9, 49.0], [11.0, 49.0], [11.1, 49.0], [11.2, 49.0], [11.3, 49.0], [11.4, 49.0], [11.5, 49.0], [11.6, 49.0], [11.7, 49.0], [11.8, 49.0], [11.9, 49.0], [12.0, 49.0], [12.1, 49.0], [12.2, 49.0], [12.3, 49.0], [12.4, 50.0], [12.5, 50.0], [12.6, 50.0], [12.7, 50.0], [12.8, 50.0], [12.9, 50.0], [13.0, 50.0], [13.1, 50.0], [13.2, 50.0], [13.3, 50.0], [13.4, 50.0], [13.5, 50.0], [13.6, 50.0], [13.7, 50.0], [13.8, 50.0], [13.9, 50.0], [14.0, 50.0], [14.1, 51.0], [14.2, 51.0], [14.3, 51.0], [14.4, 51.0], [14.5, 51.0], [14.6, 51.0], [14.7, 51.0], [14.8, 51.0], [14.9, 51.0], [15.0, 51.0], [15.1, 51.0], [15.2, 51.0], [15.3, 51.0], [15.4, 51.0], [15.5, 51.0], [15.6, 52.0], [15.7, 52.0], [15.8, 52.0], [15.9, 52.0], [16.0, 52.0], [16.1, 52.0], [16.2, 52.0], [16.3, 52.0], [16.4, 52.0], [16.5, 52.0], [16.6, 52.0], [16.7, 52.0], [16.8, 52.0], [16.9, 52.0], [17.0, 52.0], [17.1, 52.0], [17.2, 52.0], [17.3, 52.0], [17.4, 52.0], [17.5, 53.0], [17.6, 53.0], [17.7, 53.0], [17.8, 53.0], [17.9, 53.0], [18.0, 53.0], [18.1, 53.0], [18.2, 53.0], [18.3, 53.0], [18.4, 53.0], [18.5, 53.0], [18.6, 53.0], [18.7, 53.0], [18.8, 53.0], [18.9, 53.0], [19.0, 53.0], [19.1, 53.0], [19.2, 53.0], [19.3, 53.0], [19.4, 54.0], [19.5, 54.0], [19.6, 54.0], [19.7, 54.0], [19.8, 54.0], [19.9, 54.0], [20.0, 54.0], [20.1, 54.0], [20.2, 54.0], [20.3, 54.0], [20.4, 54.0], [20.5, 54.0], [20.6, 54.0], [20.7, 54.0], [20.8, 54.0], [20.9, 54.0], [21.0, 54.0], [21.1, 55.0], [21.2, 55.0], [21.3, 55.0], [21.4, 55.0], [21.5, 55.0], [21.6, 55.0], [21.7, 55.0], [21.8, 55.0], [21.9, 55.0], [22.0, 55.0], [22.1, 55.0], [22.2, 55.0], [22.3, 55.0], [22.4, 55.0], [22.5, 55.0], [22.6, 55.0], [22.7, 55.0], [22.8, 55.0], [22.9, 55.0], [23.0, 55.0], [23.1, 55.0], [23.2, 56.0], [23.3, 56.0], [23.4, 56.0], [23.5, 56.0], [23.6, 56.0], [23.7, 56.0], [23.8, 56.0], [23.9, 56.0], [24.0, 56.0], [24.1, 56.0], [24.2, 56.0], [24.3, 56.0], [24.4, 56.0], [24.5, 56.0], [24.6, 56.0], [24.7, 56.0], [24.8, 56.0], [24.9, 56.0], [25.0, 56.0], [25.1, 56.0], [25.2, 57.0], [25.3, 57.0], [25.4, 57.0], [25.5, 57.0], [25.6, 57.0], [25.7, 57.0], [25.8, 57.0], [25.9, 57.0], [26.0, 57.0], [26.1, 57.0], [26.2, 57.0], [26.3, 57.0], [26.4, 57.0], [26.5, 57.0], [26.6, 57.0], [26.7, 57.0], [26.8, 57.0], [26.9, 58.0], [27.0, 58.0], [27.1, 58.0], [27.2, 58.0], [27.3, 58.0], [27.4, 58.0], [27.5, 58.0], [27.6, 58.0], [27.7, 58.0], [27.8, 58.0], [27.9, 58.0], [28.0, 58.0], [28.1, 58.0], [28.2, 58.0], [28.3, 58.0], [28.4, 58.0], [28.5, 58.0], [28.6, 58.0], [28.7, 58.0], [28.8, 59.0], [28.9, 59.0], [29.0, 59.0], [29.1, 59.0], [29.2, 59.0], [29.3, 59.0], [29.4, 59.0], [29.5, 59.0], [29.6, 59.0], [29.7, 59.0], [29.8, 59.0], [29.9, 59.0], [30.0, 59.0], [30.1, 59.0], [30.2, 59.0], [30.3, 59.0], [30.4, 59.0], [30.5, 59.0], [30.6, 59.0], [30.7, 59.0], [30.8, 60.0], [30.9, 60.0], [31.0, 60.0], [31.1, 60.0], [31.2, 60.0], [31.3, 60.0], [31.4, 60.0], [31.5, 60.0], [31.6, 60.0], [31.7, 60.0], [31.8, 60.0], [31.9, 60.0], [32.0, 60.0], [32.1, 60.0], [32.2, 60.0], [32.3, 60.0], [32.4, 60.0], [32.5, 60.0], [32.6, 61.0], [32.7, 61.0], [32.8, 61.0], [32.9, 61.0], [33.0, 61.0], [33.1, 61.0], [33.2, 61.0], [33.3, 61.0], [33.4, 61.0], [33.5, 61.0], [33.6, 61.0], [33.7, 61.0], [33.8, 61.0], [33.9, 61.0], [34.0, 61.0], [34.1, 61.0], [34.2, 61.0], [34.3, 61.0], [34.4, 61.0], [34.5, 62.0], [34.6, 62.0], [34.7, 62.0], [34.8, 62.0], [34.9, 62.0], [35.0, 62.0], [35.1, 62.0], [35.2, 62.0], [35.3, 62.0], [35.4, 62.0], [35.5, 62.0], [35.6, 62.0], [35.7, 62.0], [35.8, 62.0], [35.9, 62.0], [36.0, 62.0], [36.1, 62.0], [36.2, 62.0], [36.3, 62.0], [36.4, 62.0], [36.5, 62.0], [36.6, 62.0], [36.7, 63.0], [36.8, 63.0], [36.9, 63.0], [37.0, 63.0], [37.1, 63.0], [37.2, 63.0], [37.3, 63.0], [37.4, 63.0], [37.5, 63.0], [37.6, 63.0], [37.7, 63.0], [37.8, 63.0], [37.9, 63.0], [38.0, 63.0], [38.1, 63.0], [38.2, 63.0], [38.3, 64.0], [38.4, 64.0], [38.5, 64.0], [38.6, 64.0], [38.7, 64.0], [38.8, 64.0], [38.9, 64.0], [39.0, 64.0], [39.1, 64.0], [39.2, 64.0], [39.3, 64.0], [39.4, 64.0], [39.5, 64.0], [39.6, 64.0], [39.7, 64.0], [39.8, 64.0], [39.9, 65.0], [40.0, 65.0], [40.1, 65.0], [40.2, 65.0], [40.3, 65.0], [40.4, 65.0], [40.5, 65.0], [40.6, 65.0], [40.7, 65.0], [40.8, 65.0], [40.9, 65.0], [41.0, 65.0], [41.1, 65.0], [41.2, 65.0], [41.3, 65.0], [41.4, 65.0], [41.5, 65.0], [41.6, 66.0], [41.7, 66.0], [41.8, 66.0], [41.9, 66.0], [42.0, 66.0], [42.1, 66.0], [42.2, 66.0], [42.3, 66.0], [42.4, 66.0], [42.5, 66.0], [42.6, 66.0], [42.7, 66.0], [42.8, 66.0], [42.9, 66.0], [43.0, 66.0], [43.1, 66.0], [43.2, 66.0], [43.3, 67.0], [43.4, 67.0], [43.5, 67.0], [43.6, 67.0], [43.7, 67.0], [43.8, 67.0], [43.9, 67.0], [44.0, 67.0], [44.1, 67.0], [44.2, 67.0], [44.3, 67.0], [44.4, 67.0], [44.5, 67.0], [44.6, 67.0], [44.7, 68.0], [44.8, 68.0], [44.9, 68.0], [45.0, 68.0], [45.1, 68.0], [45.2, 68.0], [45.3, 68.0], [45.4, 68.0], [45.5, 68.0], [45.6, 68.0], [45.7, 68.0], [45.8, 68.0], [45.9, 68.0], [46.0, 68.0], [46.1, 68.0], [46.2, 68.0], [46.3, 69.0], [46.4, 69.0], [46.5, 69.0], [46.6, 69.0], [46.7, 69.0], [46.8, 69.0], [46.9, 69.0], [47.0, 69.0], [47.1, 69.0], [47.2, 69.0], [47.3, 69.0], [47.4, 69.0], [47.5, 69.0], [47.6, 69.0], [47.7, 70.0], [47.8, 70.0], [47.9, 70.0], [48.0, 70.0], [48.1, 70.0], [48.2, 70.0], [48.3, 70.0], [48.4, 70.0], [48.5, 70.0], [48.6, 70.0], [48.7, 70.0], [48.8, 70.0], [48.9, 70.0], [49.0, 70.0], [49.1, 70.0], [49.2, 70.0], [49.3, 71.0], [49.4, 71.0], [49.5, 71.0], [49.6, 71.0], [49.7, 71.0], [49.8, 71.0], [49.9, 71.0], [50.0, 71.0], [50.1, 71.0], [50.2, 71.0], [50.3, 71.0], [50.4, 72.0], [50.5, 72.0], [50.6, 72.0], [50.7, 72.0], [50.8, 72.0], [50.9, 72.0], [51.0, 72.0], [51.1, 72.0], [51.2, 72.0], [51.3, 72.0], [51.4, 72.0], [51.5, 72.0], [51.6, 72.0], [51.7, 73.0], [51.8, 73.0], [51.9, 73.0], [52.0, 73.0], [52.1, 73.0], [52.2, 73.0], [52.3, 73.0], [52.4, 73.0], [52.5, 73.0], [52.6, 73.0], [52.7, 73.0], [52.8, 73.0], [52.9, 74.0], [53.0, 74.0], [53.1, 74.0], [53.2, 74.0], [53.3, 74.0], [53.4, 74.0], [53.5, 74.0], [53.6, 74.0], [53.7, 74.0], [53.8, 74.0], [53.9, 74.0], [54.0, 74.0], [54.1, 75.0], [54.2, 75.0], [54.3, 75.0], [54.4, 75.0], [54.5, 75.0], [54.6, 75.0], [54.7, 75.0], [54.8, 75.0], [54.9, 75.0], [55.0, 75.0], [55.1, 76.0], [55.2, 76.0], [55.3, 76.0], [55.4, 76.0], [55.5, 76.0], [55.6, 76.0], [55.7, 76.0], [55.8, 76.0], [55.9, 76.0], [56.0, 76.0], [56.1, 76.0], [56.2, 76.0], [56.3, 77.0], [56.4, 77.0], [56.5, 77.0], [56.6, 77.0], [56.7, 77.0], [56.8, 77.0], [56.9, 77.0], [57.0, 77.0], [57.1, 77.0], [57.2, 78.0], [57.3, 78.0], [57.4, 78.0], [57.5, 78.0], [57.6, 78.0], [57.7, 78.0], [57.8, 78.0], [57.9, 78.0], [58.0, 78.0], [58.1, 78.0], [58.2, 79.0], [58.3, 79.0], [58.4, 79.0], [58.5, 79.0], [58.6, 79.0], [58.7, 79.0], [58.8, 79.0], [58.9, 79.0], [59.0, 79.0], [59.1, 80.0], [59.2, 80.0], [59.3, 80.0], [59.4, 80.0], [59.5, 80.0], [59.6, 80.0], [59.7, 80.0], [59.8, 80.0], [59.9, 81.0], [60.0, 81.0], [60.1, 81.0], [60.2, 81.0], [60.3, 81.0], [60.4, 81.0], [60.5, 81.0], [60.6, 81.0], [60.7, 81.0], [60.8, 82.0], [60.9, 82.0], [61.0, 82.0], [61.1, 82.0], [61.2, 82.0], [61.3, 82.0], [61.4, 82.0], [61.5, 83.0], [61.6, 83.0], [61.7, 83.0], [61.8, 83.0], [61.9, 83.0], [62.0, 83.0], [62.1, 83.0], [62.2, 84.0], [62.3, 84.0], [62.4, 84.0], [62.5, 84.0], [62.6, 84.0], [62.7, 84.0], [62.8, 84.0], [62.9, 84.0], [63.0, 84.0], [63.1, 85.0], [63.2, 85.0], [63.3, 85.0], [63.4, 85.0], [63.5, 85.0], [63.6, 85.0], [63.7, 86.0], [63.8, 86.0], [63.9, 86.0], [64.0, 86.0], [64.1, 86.0], [64.2, 86.0], [64.3, 86.0], [64.4, 86.0], [64.5, 87.0], [64.6, 87.0], [64.7, 87.0], [64.8, 87.0], [64.9, 87.0], [65.0, 87.0], [65.1, 88.0], [65.2, 88.0], [65.3, 88.0], [65.4, 88.0], [65.5, 88.0], [65.6, 88.0], [65.7, 89.0], [65.8, 89.0], [65.9, 89.0], [66.0, 89.0], [66.1, 89.0], [66.2, 89.0], [66.3, 90.0], [66.4, 90.0], [66.5, 90.0], [66.6, 90.0], [66.7, 90.0], [66.8, 90.0], [66.9, 91.0], [67.0, 91.0], [67.1, 91.0], [67.2, 91.0], [67.3, 91.0], [67.4, 92.0], [67.5, 92.0], [67.6, 92.0], [67.7, 92.0], [67.8, 92.0], [67.9, 93.0], [68.0, 93.0], [68.1, 93.0], [68.2, 93.0], [68.3, 93.0], [68.4, 94.0], [68.5, 94.0], [68.6, 94.0], [68.7, 95.0], [68.8, 95.0], [68.9, 95.0], [69.0, 95.0], [69.1, 96.0], [69.2, 96.0], [69.3, 96.0], [69.4, 96.0], [69.5, 96.0], [69.6, 97.0], [69.7, 97.0], [69.8, 97.0], [69.9, 97.0], [70.0, 98.0], [70.1, 98.0], [70.2, 98.0], [70.3, 98.0], [70.4, 98.0], [70.5, 99.0], [70.6, 99.0], [70.7, 99.0], [70.8, 99.0], [70.9, 99.0], [71.0, 100.0], [71.1, 100.0], [71.2, 100.0], [71.3, 100.0], [71.4, 101.0], [71.5, 101.0], [71.6, 101.0], [71.7, 101.0], [71.8, 101.0], [71.9, 102.0], [72.0, 102.0], [72.1, 102.0], [72.2, 103.0], [72.3, 103.0], [72.4, 103.0], [72.5, 103.0], [72.6, 103.0], [72.7, 103.0], [72.8, 104.0], [72.9, 104.0], [73.0, 104.0], [73.1, 104.0], [73.2, 105.0], [73.3, 105.0], [73.4, 105.0], [73.5, 106.0], [73.6, 106.0], [73.7, 106.0], [73.8, 106.0], [73.9, 107.0], [74.0, 107.0], [74.1, 107.0], [74.2, 107.0], [74.3, 108.0], [74.4, 108.0], [74.5, 108.0], [74.6, 108.0], [74.7, 109.0], [74.8, 109.0], [74.9, 110.0], [75.0, 110.0], [75.1, 110.0], [75.2, 110.0], [75.3, 111.0], [75.4, 111.0], [75.5, 112.0], [75.6, 112.0], [75.7, 112.0], [75.8, 113.0], [75.9, 113.0], [76.0, 113.0], [76.1, 114.0], [76.2, 114.0], [76.3, 114.0], [76.4, 115.0], [76.5, 115.0], [76.6, 115.0], [76.7, 116.0], [76.8, 116.0], [76.9, 117.0], [77.0, 117.0], [77.1, 117.0], [77.2, 118.0], [77.3, 118.0], [77.4, 119.0], [77.5, 119.0], [77.6, 119.0], [77.7, 120.0], [77.8, 120.0], [77.9, 121.0], [78.0, 121.0], [78.1, 122.0], [78.2, 122.0], [78.3, 123.0], [78.4, 123.0], [78.5, 124.0], [78.6, 124.0], [78.7, 125.0], [78.8, 125.0], [78.9, 125.0], [79.0, 126.0], [79.1, 127.0], [79.2, 127.0], [79.3, 128.0], [79.4, 128.0], [79.5, 129.0], [79.6, 129.0], [79.7, 130.0], [79.8, 130.0], [79.9, 131.0], [80.0, 132.0], [80.1, 132.0], [80.2, 133.0], [80.3, 133.0], [80.4, 134.0], [80.5, 135.0], [80.6, 136.0], [80.7, 137.0], [80.8, 138.0], [80.9, 138.0], [81.0, 139.0], [81.1, 140.0], [81.2, 141.0], [81.3, 142.0], [81.4, 143.0], [81.5, 143.0], [81.6, 145.0], [81.7, 145.0], [81.8, 146.0], [81.9, 148.0], [82.0, 149.0], [82.1, 150.0], [82.2, 151.0], [82.3, 152.0], [82.4, 153.0], [82.5, 155.0], [82.6, 156.0], [82.7, 158.0], [82.8, 160.0], [82.9, 161.0], [83.0, 163.0], [83.1, 166.0], [83.2, 168.0], [83.3, 169.0], [83.4, 172.0], [83.5, 173.0], [83.6, 176.0], [83.7, 179.0], [83.8, 183.0], [83.9, 188.0], [84.0, 192.0], [84.1, 196.0], [84.2, 201.0], [84.3, 204.0], [84.4, 208.0], [84.5, 218.0], [84.6, 223.0], [84.7, 225.0], [84.8, 227.0], [84.9, 229.0], [85.0, 231.0], [85.1, 233.0], [85.2, 235.0], [85.3, 238.0], [85.4, 240.0], [85.5, 240.0], [85.6, 242.0], [85.7, 243.0], [85.8, 245.0], [85.9, 247.0], [86.0, 249.0], [86.1, 251.0], [86.2, 252.0], [86.3, 255.0], [86.4, 256.0], [86.5, 258.0], [86.6, 260.0], [86.7, 261.0], [86.8, 264.0], [86.9, 267.0], [87.0, 268.0], [87.1, 270.0], [87.2, 272.0], [87.3, 274.0], [87.4, 276.0], [87.5, 278.0], [87.6, 280.0], [87.7, 282.0], [87.8, 283.0], [87.9, 285.0], [88.0, 287.0], [88.1, 289.0], [88.2, 291.0], [88.3, 293.0], [88.4, 295.0], [88.5, 297.0], [88.6, 299.0], [88.7, 301.0], [88.8, 303.0], [88.9, 304.0], [89.0, 306.0], [89.1, 307.0], [89.2, 309.0], [89.3, 310.0], [89.4, 312.0], [89.5, 314.0], [89.6, 316.0], [89.7, 318.0], [89.8, 320.0], [89.9, 323.0], [90.0, 325.0], [90.1, 327.0], [90.2, 329.0], [90.3, 330.0], [90.4, 331.0], [90.5, 333.0], [90.6, 336.0], [90.7, 339.0], [90.8, 340.0], [90.9, 342.0], [91.0, 344.0], [91.1, 346.0], [91.2, 348.0], [91.3, 350.0], [91.4, 352.0], [91.5, 353.0], [91.6, 355.0], [91.7, 357.0], [91.8, 359.0], [91.9, 361.0], [92.0, 364.0], [92.1, 365.0], [92.2, 368.0], [92.3, 370.0], [92.4, 372.0], [92.5, 374.0], [92.6, 376.0], [92.7, 378.0], [92.8, 380.0], [92.9, 383.0], [93.0, 386.0], [93.1, 389.0], [93.2, 392.0], [93.3, 394.0], [93.4, 396.0], [93.5, 398.0], [93.6, 400.0], [93.7, 401.0], [93.8, 402.0], [93.9, 405.0], [94.0, 407.0], [94.1, 409.0], [94.2, 410.0], [94.3, 413.0], [94.4, 416.0], [94.5, 418.0], [94.6, 421.0], [94.7, 423.0], [94.8, 425.0], [94.9, 427.0], [95.0, 429.0], [95.1, 431.0], [95.2, 433.0], [95.3, 436.0], [95.4, 438.0], [95.5, 440.0], [95.6, 442.0], [95.7, 444.0], [95.8, 446.0], [95.9, 448.0], [96.0, 450.0], [96.1, 452.0], [96.2, 454.0], [96.3, 458.0], [96.4, 459.0], [96.5, 461.0], [96.6, 463.0], [96.7, 465.0], [96.8, 468.0], [96.9, 469.0], [97.0, 471.0], [97.1, 473.0], [97.2, 475.0], [97.3, 476.0], [97.4, 478.0], [97.5, 480.0], [97.6, 481.0], [97.7, 484.0], [97.8, 485.0], [97.9, 487.0], [98.0, 489.0], [98.1, 491.0], [98.2, 493.0], [98.3, 495.0], [98.4, 497.0], [98.5, 498.0], [98.6, 501.0], [98.7, 504.0], [98.8, 506.0], [98.9, 507.0], [99.0, 508.0], [99.1, 510.0], [99.2, 512.0], [99.3, 514.0], [99.4, 516.0], [99.5, 519.0], [99.6, 521.0], [99.7, 523.0], [99.8, 526.0], [99.9, 604.0], [100.0, 130931.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 11624.0, "series": [{"data": [[0.0, 11624.0], [600.0, 5.0], [700.0, 1.0], [800.0, 5.0], [200.0, 725.0], [900.0, 1.0], [300.0, 816.0], [1200.0, 2.0], [400.0, 808.0], [100.0, 2171.0], [500.0, 224.0], [130900.0, 1.0], [129700.0, 1.0], [129800.0, 1.0], [130100.0, 1.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 130900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 16152.0, "series": [{"data": [[0.0, 16152.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 230.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.74334914E12, "maxY": 20.0, "series": [{"data": [[1.74334914E12, 20.0], [1.74334932E12, 1.0], [1.7433492E12, 20.0], [1.74334926E12, 19.845096241979835]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74334932E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 120.37068491476764, "minX": 1.0, "maxY": 130931.0, "series": [{"data": [[8.0, 275.0], [2.0, 129859.0], [9.0, 373.0], [10.0, 515.0], [11.0, 342.0], [12.0, 340.0], [3.0, 129719.0], [13.0, 436.0], [14.0, 353.0], [16.0, 299.5], [4.0, 130931.0], [1.0, 130159.0], [17.0, 381.0], [19.0, 431.5], [20.0, 120.37068491476764], [5.0, 440.0], [6.0, 402.0], [7.0, 269.0]], "isOverall": false, "label": "Google", "isController": false}, {"data": [[19.98852679116319, 152.34730867814]], "isOverall": false, "label": "Google-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1.8666666666666667, "minX": 1.74334914E12, "maxY": 251995.0, "series": [{"data": [[1.74334914E12, 251995.0], [1.74334932E12, 14.616666666666667], [1.7433492E12, 224634.65], [1.74334926E12, 15946.783333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74334914E12, 12310.666666666666], [1.74334932E12, 1.8666666666666667], [1.7433492E12, 16238.133333333333], [1.74334926E12, 2036.5333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74334932E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 92.72039423805914, "minX": 1.74334914E12, "maxY": 130159.0, "series": [{"data": [[1.74334914E12, 92.72039423805914], [1.74334932E12, 130159.0], [1.7433492E12, 110.06552477296242], [1.74334926E12, 730.7543538038504]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74334932E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 89.04806671720992, "minX": 1.74334914E12, "maxY": 130156.0, "series": [{"data": [[1.74334914E12, 89.04806671720992], [1.74334932E12, 130156.0], [1.7433492E12, 108.86906540981735], [1.74334926E12, 729.9532538955089]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74334932E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 31.423956776641162, "minX": 1.74334914E12, "maxY": 129746.0, "series": [{"data": [[1.74334914E12, 58.48263836239587], [1.74334932E12, 129746.0], [1.7433492E12, 31.423956776641162], [1.74334926E12, 372.3794683776352]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74334932E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 35.0, "minX": 1.74334914E12, "maxY": 130931.0, "series": [{"data": [[1.74334914E12, 911.0], [1.74334932E12, 130159.0], [1.7433492E12, 1295.0], [1.74334926E12, 130931.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74334914E12, 140.0], [1.74334932E12, 130159.0], [1.7433492E12, 328.0], [1.74334926E12, 495.80000000000007]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74334914E12, 240.07999999999993], [1.74334932E12, 130159.0], [1.7433492E12, 507.0], [1.74334926E12, 524.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74334914E12, 167.0], [1.74334932E12, 130159.0], [1.7433492E12, 437.0], [1.74334926E12, 512.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74334914E12, 36.0], [1.74334932E12, 130159.0], [1.7433492E12, 35.0], [1.74334926E12, 223.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74334914E12, 81.0], [1.74334932E12, 130159.0], [1.7433492E12, 62.0], [1.74334926E12, 370.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74334932E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 43.5, "minX": 1.0, "maxY": 130009.0, "series": [{"data": [[18.0, 365.5], [37.0, 402.0], [38.0, 394.5], [39.0, 379.0], [40.0, 391.0], [41.0, 387.0], [43.0, 373.5], [42.0, 361.0], [45.0, 366.0], [44.0, 376.0], [46.0, 324.0], [47.0, 353.0], [50.0, 340.0], [72.0, 43.5], [83.0, 213.0], [97.0, 204.0], [125.0, 154.0], [139.0, 105.0], [149.0, 127.5], [154.0, 118.5], [152.0, 124.0], [160.0, 86.0], [171.0, 108.0], [175.0, 108.0], [178.0, 103.0], [190.0, 94.5], [191.0, 92.0], [184.0, 84.0], [194.0, 83.5], [199.0, 70.0], [200.0, 90.5], [207.0, 88.0], [203.0, 77.0], [211.0, 80.0], [209.0, 48.0], [229.0, 72.0], [231.0, 67.0], [238.0, 67.0], [232.0, 69.0], [242.0, 65.0], [245.0, 66.0], [241.0, 66.0], [252.0, 64.0], [249.0, 65.0], [251.0, 63.0], [248.0, 63.0], [254.0, 59.0], [253.0, 59.0], [258.0, 58.0], [257.0, 63.0], [259.0, 61.0], [256.0, 60.5], [266.0, 56.0], [261.0, 55.0], [1.0, 130009.0], [271.0, 55.0], [270.0, 56.0], [269.0, 56.0], [279.0, 55.0], [275.0, 52.0], [276.0, 55.0], [280.0, 55.0], [283.0, 53.0], [272.0, 54.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 283.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 42.5, "minX": 1.0, "maxY": 130007.0, "series": [{"data": [[18.0, 364.5], [37.0, 401.0], [38.0, 393.0], [39.0, 378.0], [40.0, 390.5], [41.0, 386.0], [43.0, 372.5], [42.0, 360.5], [45.0, 366.0], [44.0, 375.5], [46.0, 323.0], [47.0, 353.0], [50.0, 339.5], [72.0, 42.5], [83.0, 183.0], [97.0, 168.0], [125.0, 147.0], [139.0, 102.0], [149.0, 123.0], [154.0, 115.5], [152.0, 122.0], [160.0, 84.0], [171.0, 106.0], [175.0, 106.0], [178.0, 101.0], [190.0, 92.5], [191.0, 89.0], [184.0, 82.5], [194.0, 80.0], [199.0, 68.0], [200.0, 89.0], [207.0, 87.0], [203.0, 75.0], [211.0, 79.0], [209.0, 47.0], [229.0, 71.0], [231.0, 66.0], [238.0, 66.0], [232.0, 67.0], [242.0, 64.0], [245.0, 65.0], [241.0, 65.0], [252.0, 64.0], [249.0, 64.0], [251.0, 61.0], [248.0, 62.0], [254.0, 58.0], [253.0, 57.0], [258.0, 56.0], [257.0, 61.0], [259.0, 60.0], [256.0, 59.5], [266.0, 55.0], [261.0, 54.0], [1.0, 130007.0], [271.0, 54.0], [270.0, 55.0], [269.0, 55.0], [279.0, 54.0], [275.0, 51.0], [276.0, 54.0], [280.0, 54.0], [283.0, 52.0], [272.0, 54.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 283.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 17.866666666666667, "minX": 1.74334914E12, "maxY": 144.98333333333332, "series": [{"data": [[1.74334914E12, 110.25], [1.7433492E12, 144.98333333333332], [1.74334926E12, 17.866666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74334926E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74334914E12, "maxY": 144.9, "series": [{"data": [[1.74334914E12, 4.266666666666667], [1.7433492E12, 0.08333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.74334914E12, 105.65], [1.74334932E12, 0.016666666666666666], [1.7433492E12, 144.9], [1.74334926E12, 18.183333333333334]], "isOverall": false, "label": "302", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74334932E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74334914E12, "maxY": 144.98333333333332, "series": [{"data": [[1.74334914E12, 109.91666666666667], [1.74334932E12, 0.016666666666666666], [1.7433492E12, 144.98333333333332], [1.74334926E12, 18.183333333333334]], "isOverall": false, "label": "Google-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74334932E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74334914E12, "maxY": 144.98333333333332, "series": [{"data": [[1.74334914E12, 109.91666666666667], [1.74334932E12, 0.016666666666666666], [1.7433492E12, 144.98333333333332], [1.74334926E12, 18.183333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74334932E12, "title": "Total Transactions Per Second"}},
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

