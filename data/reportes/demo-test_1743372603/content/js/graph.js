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
        data: {"result": {"minY": 235.0, "minX": 0.0, "maxY": 740.0, "series": [{"data": [[0.0, 235.0], [0.1, 235.0], [0.2, 235.0], [0.3, 235.0], [0.4, 235.0], [0.5, 235.0], [0.6, 235.0], [0.7, 235.0], [0.8, 235.0], [0.9, 235.0], [1.0, 237.0], [1.1, 237.0], [1.2, 237.0], [1.3, 237.0], [1.4, 237.0], [1.5, 237.0], [1.6, 237.0], [1.7, 237.0], [1.8, 237.0], [1.9, 237.0], [2.0, 242.0], [2.1, 242.0], [2.2, 242.0], [2.3, 242.0], [2.4, 242.0], [2.5, 242.0], [2.6, 242.0], [2.7, 242.0], [2.8, 242.0], [2.9, 242.0], [3.0, 246.0], [3.1, 246.0], [3.2, 246.0], [3.3, 246.0], [3.4, 246.0], [3.5, 246.0], [3.6, 246.0], [3.7, 246.0], [3.8, 246.0], [3.9, 246.0], [4.0, 250.0], [4.1, 250.0], [4.2, 250.0], [4.3, 250.0], [4.4, 250.0], [4.5, 250.0], [4.6, 250.0], [4.7, 250.0], [4.8, 250.0], [4.9, 250.0], [5.0, 252.0], [5.1, 252.0], [5.2, 252.0], [5.3, 252.0], [5.4, 252.0], [5.5, 252.0], [5.6, 252.0], [5.7, 252.0], [5.8, 252.0], [5.9, 252.0], [6.0, 259.0], [6.1, 259.0], [6.2, 259.0], [6.3, 259.0], [6.4, 259.0], [6.5, 259.0], [6.6, 259.0], [6.7, 259.0], [6.8, 259.0], [6.9, 259.0], [7.0, 260.0], [7.1, 260.0], [7.2, 260.0], [7.3, 260.0], [7.4, 260.0], [7.5, 260.0], [7.6, 260.0], [7.7, 260.0], [7.8, 260.0], [7.9, 260.0], [8.0, 260.0], [8.1, 260.0], [8.2, 260.0], [8.3, 260.0], [8.4, 260.0], [8.5, 260.0], [8.6, 260.0], [8.7, 260.0], [8.8, 260.0], [8.9, 260.0], [9.0, 262.0], [9.1, 262.0], [9.2, 262.0], [9.3, 262.0], [9.4, 262.0], [9.5, 262.0], [9.6, 262.0], [9.7, 262.0], [9.8, 262.0], [9.9, 262.0], [10.0, 263.0], [10.1, 263.0], [10.2, 263.0], [10.3, 263.0], [10.4, 263.0], [10.5, 263.0], [10.6, 263.0], [10.7, 263.0], [10.8, 263.0], [10.9, 263.0], [11.0, 273.0], [11.1, 273.0], [11.2, 273.0], [11.3, 273.0], [11.4, 273.0], [11.5, 273.0], [11.6, 273.0], [11.7, 273.0], [11.8, 273.0], [11.9, 273.0], [12.0, 276.0], [12.1, 276.0], [12.2, 276.0], [12.3, 276.0], [12.4, 276.0], [12.5, 276.0], [12.6, 276.0], [12.7, 276.0], [12.8, 276.0], [12.9, 276.0], [13.0, 277.0], [13.1, 277.0], [13.2, 277.0], [13.3, 277.0], [13.4, 277.0], [13.5, 277.0], [13.6, 277.0], [13.7, 277.0], [13.8, 277.0], [13.9, 277.0], [14.0, 277.0], [14.1, 277.0], [14.2, 277.0], [14.3, 277.0], [14.4, 277.0], [14.5, 277.0], [14.6, 277.0], [14.7, 277.0], [14.8, 277.0], [14.9, 277.0], [15.0, 277.0], [15.1, 277.0], [15.2, 277.0], [15.3, 277.0], [15.4, 277.0], [15.5, 277.0], [15.6, 277.0], [15.7, 277.0], [15.8, 277.0], [15.9, 277.0], [16.0, 278.0], [16.1, 278.0], [16.2, 278.0], [16.3, 278.0], [16.4, 278.0], [16.5, 278.0], [16.6, 278.0], [16.7, 278.0], [16.8, 278.0], [16.9, 278.0], [17.0, 281.0], [17.1, 281.0], [17.2, 281.0], [17.3, 281.0], [17.4, 281.0], [17.5, 281.0], [17.6, 281.0], [17.7, 281.0], [17.8, 281.0], [17.9, 281.0], [18.0, 284.0], [18.1, 284.0], [18.2, 284.0], [18.3, 284.0], [18.4, 284.0], [18.5, 284.0], [18.6, 284.0], [18.7, 284.0], [18.8, 284.0], [18.9, 284.0], [19.0, 287.0], [19.1, 287.0], [19.2, 287.0], [19.3, 287.0], [19.4, 287.0], [19.5, 287.0], [19.6, 287.0], [19.7, 287.0], [19.8, 287.0], [19.9, 287.0], [20.0, 287.0], [20.1, 287.0], [20.2, 287.0], [20.3, 287.0], [20.4, 287.0], [20.5, 287.0], [20.6, 287.0], [20.7, 287.0], [20.8, 287.0], [20.9, 287.0], [21.0, 289.0], [21.1, 289.0], [21.2, 289.0], [21.3, 289.0], [21.4, 289.0], [21.5, 289.0], [21.6, 289.0], [21.7, 289.0], [21.8, 289.0], [21.9, 289.0], [22.0, 293.0], [22.1, 293.0], [22.2, 293.0], [22.3, 293.0], [22.4, 293.0], [22.5, 293.0], [22.6, 293.0], [22.7, 293.0], [22.8, 293.0], [22.9, 293.0], [23.0, 297.0], [23.1, 297.0], [23.2, 297.0], [23.3, 297.0], [23.4, 297.0], [23.5, 297.0], [23.6, 297.0], [23.7, 297.0], [23.8, 297.0], [23.9, 297.0], [24.0, 298.0], [24.1, 298.0], [24.2, 298.0], [24.3, 298.0], [24.4, 298.0], [24.5, 298.0], [24.6, 298.0], [24.7, 298.0], [24.8, 298.0], [24.9, 298.0], [25.0, 300.0], [25.1, 300.0], [25.2, 300.0], [25.3, 300.0], [25.4, 300.0], [25.5, 300.0], [25.6, 300.0], [25.7, 300.0], [25.8, 300.0], [25.9, 300.0], [26.0, 301.0], [26.1, 301.0], [26.2, 301.0], [26.3, 301.0], [26.4, 301.0], [26.5, 301.0], [26.6, 301.0], [26.7, 301.0], [26.8, 301.0], [26.9, 301.0], [27.0, 301.0], [27.1, 301.0], [27.2, 301.0], [27.3, 301.0], [27.4, 301.0], [27.5, 301.0], [27.6, 301.0], [27.7, 301.0], [27.8, 301.0], [27.9, 301.0], [28.0, 307.0], [28.1, 307.0], [28.2, 307.0], [28.3, 307.0], [28.4, 307.0], [28.5, 307.0], [28.6, 307.0], [28.7, 307.0], [28.8, 307.0], [28.9, 307.0], [29.0, 320.0], [29.1, 320.0], [29.2, 320.0], [29.3, 320.0], [29.4, 320.0], [29.5, 320.0], [29.6, 320.0], [29.7, 320.0], [29.8, 320.0], [29.9, 320.0], [30.0, 337.0], [30.1, 337.0], [30.2, 337.0], [30.3, 337.0], [30.4, 337.0], [30.5, 337.0], [30.6, 337.0], [30.7, 337.0], [30.8, 337.0], [30.9, 337.0], [31.0, 346.0], [31.1, 346.0], [31.2, 346.0], [31.3, 346.0], [31.4, 346.0], [31.5, 346.0], [31.6, 346.0], [31.7, 346.0], [31.8, 346.0], [31.9, 346.0], [32.0, 350.0], [32.1, 350.0], [32.2, 350.0], [32.3, 350.0], [32.4, 350.0], [32.5, 350.0], [32.6, 350.0], [32.7, 350.0], [32.8, 350.0], [32.9, 350.0], [33.0, 351.0], [33.1, 351.0], [33.2, 351.0], [33.3, 351.0], [33.4, 351.0], [33.5, 351.0], [33.6, 351.0], [33.7, 351.0], [33.8, 351.0], [33.9, 351.0], [34.0, 354.0], [34.1, 354.0], [34.2, 354.0], [34.3, 354.0], [34.4, 354.0], [34.5, 354.0], [34.6, 354.0], [34.7, 354.0], [34.8, 354.0], [34.9, 354.0], [35.0, 354.0], [35.1, 354.0], [35.2, 354.0], [35.3, 354.0], [35.4, 354.0], [35.5, 354.0], [35.6, 354.0], [35.7, 354.0], [35.8, 354.0], [35.9, 354.0], [36.0, 355.0], [36.1, 355.0], [36.2, 355.0], [36.3, 355.0], [36.4, 355.0], [36.5, 355.0], [36.6, 355.0], [36.7, 355.0], [36.8, 355.0], [36.9, 355.0], [37.0, 366.0], [37.1, 366.0], [37.2, 366.0], [37.3, 366.0], [37.4, 366.0], [37.5, 366.0], [37.6, 366.0], [37.7, 366.0], [37.8, 366.0], [37.9, 366.0], [38.0, 370.0], [38.1, 370.0], [38.2, 370.0], [38.3, 370.0], [38.4, 370.0], [38.5, 370.0], [38.6, 370.0], [38.7, 370.0], [38.8, 370.0], [38.9, 370.0], [39.0, 371.0], [39.1, 371.0], [39.2, 371.0], [39.3, 371.0], [39.4, 371.0], [39.5, 371.0], [39.6, 371.0], [39.7, 371.0], [39.8, 371.0], [39.9, 371.0], [40.0, 372.0], [40.1, 372.0], [40.2, 372.0], [40.3, 372.0], [40.4, 372.0], [40.5, 372.0], [40.6, 372.0], [40.7, 372.0], [40.8, 372.0], [40.9, 372.0], [41.0, 373.0], [41.1, 373.0], [41.2, 373.0], [41.3, 373.0], [41.4, 373.0], [41.5, 373.0], [41.6, 373.0], [41.7, 373.0], [41.8, 373.0], [41.9, 373.0], [42.0, 373.0], [42.1, 373.0], [42.2, 373.0], [42.3, 373.0], [42.4, 373.0], [42.5, 373.0], [42.6, 373.0], [42.7, 373.0], [42.8, 373.0], [42.9, 373.0], [43.0, 380.0], [43.1, 380.0], [43.2, 380.0], [43.3, 380.0], [43.4, 380.0], [43.5, 380.0], [43.6, 380.0], [43.7, 380.0], [43.8, 380.0], [43.9, 380.0], [44.0, 381.0], [44.1, 381.0], [44.2, 381.0], [44.3, 381.0], [44.4, 381.0], [44.5, 381.0], [44.6, 381.0], [44.7, 381.0], [44.8, 381.0], [44.9, 381.0], [45.0, 385.0], [45.1, 385.0], [45.2, 385.0], [45.3, 385.0], [45.4, 385.0], [45.5, 385.0], [45.6, 385.0], [45.7, 385.0], [45.8, 385.0], [45.9, 385.0], [46.0, 388.0], [46.1, 388.0], [46.2, 388.0], [46.3, 388.0], [46.4, 388.0], [46.5, 388.0], [46.6, 388.0], [46.7, 388.0], [46.8, 388.0], [46.9, 388.0], [47.0, 389.0], [47.1, 389.0], [47.2, 389.0], [47.3, 389.0], [47.4, 389.0], [47.5, 389.0], [47.6, 389.0], [47.7, 389.0], [47.8, 389.0], [47.9, 389.0], [48.0, 391.0], [48.1, 391.0], [48.2, 391.0], [48.3, 391.0], [48.4, 391.0], [48.5, 391.0], [48.6, 391.0], [48.7, 391.0], [48.8, 391.0], [48.9, 391.0], [49.0, 392.0], [49.1, 392.0], [49.2, 392.0], [49.3, 392.0], [49.4, 392.0], [49.5, 392.0], [49.6, 392.0], [49.7, 392.0], [49.8, 392.0], [49.9, 392.0], [50.0, 395.0], [50.1, 395.0], [50.2, 395.0], [50.3, 395.0], [50.4, 395.0], [50.5, 395.0], [50.6, 395.0], [50.7, 395.0], [50.8, 395.0], [50.9, 395.0], [51.0, 397.0], [51.1, 397.0], [51.2, 397.0], [51.3, 397.0], [51.4, 397.0], [51.5, 397.0], [51.6, 397.0], [51.7, 397.0], [51.8, 397.0], [51.9, 397.0], [52.0, 400.0], [52.1, 400.0], [52.2, 400.0], [52.3, 400.0], [52.4, 400.0], [52.5, 400.0], [52.6, 400.0], [52.7, 400.0], [52.8, 400.0], [52.9, 400.0], [53.0, 407.0], [53.1, 407.0], [53.2, 407.0], [53.3, 407.0], [53.4, 407.0], [53.5, 407.0], [53.6, 407.0], [53.7, 407.0], [53.8, 407.0], [53.9, 407.0], [54.0, 408.0], [54.1, 408.0], [54.2, 408.0], [54.3, 408.0], [54.4, 408.0], [54.5, 408.0], [54.6, 408.0], [54.7, 408.0], [54.8, 408.0], [54.9, 408.0], [55.0, 409.0], [55.1, 409.0], [55.2, 409.0], [55.3, 409.0], [55.4, 409.0], [55.5, 409.0], [55.6, 409.0], [55.7, 409.0], [55.8, 409.0], [55.9, 409.0], [56.0, 411.0], [56.1, 411.0], [56.2, 411.0], [56.3, 411.0], [56.4, 411.0], [56.5, 411.0], [56.6, 411.0], [56.7, 411.0], [56.8, 411.0], [56.9, 411.0], [57.0, 413.0], [57.1, 413.0], [57.2, 413.0], [57.3, 413.0], [57.4, 413.0], [57.5, 413.0], [57.6, 413.0], [57.7, 413.0], [57.8, 413.0], [57.9, 413.0], [58.0, 418.0], [58.1, 418.0], [58.2, 418.0], [58.3, 418.0], [58.4, 418.0], [58.5, 418.0], [58.6, 418.0], [58.7, 418.0], [58.8, 418.0], [58.9, 418.0], [59.0, 418.0], [59.1, 418.0], [59.2, 418.0], [59.3, 418.0], [59.4, 418.0], [59.5, 418.0], [59.6, 418.0], [59.7, 418.0], [59.8, 418.0], [59.9, 418.0], [60.0, 419.0], [60.1, 419.0], [60.2, 419.0], [60.3, 419.0], [60.4, 419.0], [60.5, 419.0], [60.6, 419.0], [60.7, 419.0], [60.8, 419.0], [60.9, 419.0], [61.0, 425.0], [61.1, 425.0], [61.2, 425.0], [61.3, 425.0], [61.4, 425.0], [61.5, 425.0], [61.6, 425.0], [61.7, 425.0], [61.8, 425.0], [61.9, 425.0], [62.0, 428.0], [62.1, 428.0], [62.2, 428.0], [62.3, 428.0], [62.4, 428.0], [62.5, 428.0], [62.6, 428.0], [62.7, 428.0], [62.8, 428.0], [62.9, 428.0], [63.0, 429.0], [63.1, 429.0], [63.2, 429.0], [63.3, 429.0], [63.4, 429.0], [63.5, 429.0], [63.6, 429.0], [63.7, 429.0], [63.8, 429.0], [63.9, 429.0], [64.0, 431.0], [64.1, 431.0], [64.2, 431.0], [64.3, 431.0], [64.4, 431.0], [64.5, 431.0], [64.6, 431.0], [64.7, 431.0], [64.8, 431.0], [64.9, 431.0], [65.0, 436.0], [65.1, 436.0], [65.2, 436.0], [65.3, 436.0], [65.4, 436.0], [65.5, 436.0], [65.6, 436.0], [65.7, 436.0], [65.8, 436.0], [65.9, 436.0], [66.0, 447.0], [66.1, 447.0], [66.2, 447.0], [66.3, 447.0], [66.4, 447.0], [66.5, 447.0], [66.6, 447.0], [66.7, 447.0], [66.8, 447.0], [66.9, 447.0], [67.0, 448.0], [67.1, 448.0], [67.2, 448.0], [67.3, 448.0], [67.4, 448.0], [67.5, 448.0], [67.6, 448.0], [67.7, 448.0], [67.8, 448.0], [67.9, 448.0], [68.0, 450.0], [68.1, 450.0], [68.2, 450.0], [68.3, 450.0], [68.4, 450.0], [68.5, 450.0], [68.6, 450.0], [68.7, 450.0], [68.8, 450.0], [68.9, 450.0], [69.0, 457.0], [69.1, 457.0], [69.2, 457.0], [69.3, 457.0], [69.4, 457.0], [69.5, 457.0], [69.6, 457.0], [69.7, 457.0], [69.8, 457.0], [69.9, 457.0], [70.0, 458.0], [70.1, 458.0], [70.2, 458.0], [70.3, 458.0], [70.4, 458.0], [70.5, 458.0], [70.6, 458.0], [70.7, 458.0], [70.8, 458.0], [70.9, 458.0], [71.0, 459.0], [71.1, 459.0], [71.2, 459.0], [71.3, 459.0], [71.4, 459.0], [71.5, 459.0], [71.6, 459.0], [71.7, 459.0], [71.8, 459.0], [71.9, 459.0], [72.0, 460.0], [72.1, 460.0], [72.2, 460.0], [72.3, 460.0], [72.4, 460.0], [72.5, 460.0], [72.6, 460.0], [72.7, 460.0], [72.8, 460.0], [72.9, 460.0], [73.0, 464.0], [73.1, 464.0], [73.2, 464.0], [73.3, 464.0], [73.4, 464.0], [73.5, 464.0], [73.6, 464.0], [73.7, 464.0], [73.8, 464.0], [73.9, 464.0], [74.0, 471.0], [74.1, 471.0], [74.2, 471.0], [74.3, 471.0], [74.4, 471.0], [74.5, 471.0], [74.6, 471.0], [74.7, 471.0], [74.8, 471.0], [74.9, 471.0], [75.0, 474.0], [75.1, 474.0], [75.2, 474.0], [75.3, 474.0], [75.4, 474.0], [75.5, 474.0], [75.6, 474.0], [75.7, 474.0], [75.8, 474.0], [75.9, 474.0], [76.0, 475.0], [76.1, 475.0], [76.2, 475.0], [76.3, 475.0], [76.4, 475.0], [76.5, 475.0], [76.6, 475.0], [76.7, 475.0], [76.8, 475.0], [76.9, 475.0], [77.0, 477.0], [77.1, 477.0], [77.2, 477.0], [77.3, 477.0], [77.4, 477.0], [77.5, 477.0], [77.6, 477.0], [77.7, 477.0], [77.8, 477.0], [77.9, 477.0], [78.0, 478.0], [78.1, 478.0], [78.2, 478.0], [78.3, 478.0], [78.4, 478.0], [78.5, 478.0], [78.6, 478.0], [78.7, 478.0], [78.8, 478.0], [78.9, 478.0], [79.0, 484.0], [79.1, 484.0], [79.2, 484.0], [79.3, 484.0], [79.4, 484.0], [79.5, 484.0], [79.6, 484.0], [79.7, 484.0], [79.8, 484.0], [79.9, 484.0], [80.0, 486.0], [80.1, 486.0], [80.2, 486.0], [80.3, 486.0], [80.4, 486.0], [80.5, 486.0], [80.6, 486.0], [80.7, 486.0], [80.8, 486.0], [80.9, 486.0], [81.0, 490.0], [81.1, 490.0], [81.2, 490.0], [81.3, 490.0], [81.4, 490.0], [81.5, 490.0], [81.6, 490.0], [81.7, 490.0], [81.8, 490.0], [81.9, 490.0], [82.0, 493.0], [82.1, 493.0], [82.2, 493.0], [82.3, 493.0], [82.4, 493.0], [82.5, 493.0], [82.6, 493.0], [82.7, 493.0], [82.8, 493.0], [82.9, 493.0], [83.0, 495.0], [83.1, 495.0], [83.2, 495.0], [83.3, 495.0], [83.4, 495.0], [83.5, 495.0], [83.6, 495.0], [83.7, 495.0], [83.8, 495.0], [83.9, 495.0], [84.0, 497.0], [84.1, 497.0], [84.2, 497.0], [84.3, 497.0], [84.4, 497.0], [84.5, 497.0], [84.6, 497.0], [84.7, 497.0], [84.8, 497.0], [84.9, 497.0], [85.0, 499.0], [85.1, 499.0], [85.2, 499.0], [85.3, 499.0], [85.4, 499.0], [85.5, 499.0], [85.6, 499.0], [85.7, 499.0], [85.8, 499.0], [85.9, 499.0], [86.0, 505.0], [86.1, 505.0], [86.2, 505.0], [86.3, 505.0], [86.4, 505.0], [86.5, 505.0], [86.6, 505.0], [86.7, 505.0], [86.8, 505.0], [86.9, 505.0], [87.0, 506.0], [87.1, 506.0], [87.2, 506.0], [87.3, 506.0], [87.4, 506.0], [87.5, 506.0], [87.6, 506.0], [87.7, 506.0], [87.8, 506.0], [87.9, 506.0], [88.0, 506.0], [88.1, 506.0], [88.2, 506.0], [88.3, 506.0], [88.4, 506.0], [88.5, 506.0], [88.6, 506.0], [88.7, 506.0], [88.8, 506.0], [88.9, 506.0], [89.0, 513.0], [89.1, 513.0], [89.2, 513.0], [89.3, 513.0], [89.4, 513.0], [89.5, 513.0], [89.6, 513.0], [89.7, 513.0], [89.8, 513.0], [89.9, 513.0], [90.0, 515.0], [90.1, 515.0], [90.2, 515.0], [90.3, 515.0], [90.4, 515.0], [90.5, 515.0], [90.6, 515.0], [90.7, 515.0], [90.8, 515.0], [90.9, 515.0], [91.0, 516.0], [91.1, 516.0], [91.2, 516.0], [91.3, 516.0], [91.4, 516.0], [91.5, 516.0], [91.6, 516.0], [91.7, 516.0], [91.8, 516.0], [91.9, 516.0], [92.0, 517.0], [92.1, 517.0], [92.2, 517.0], [92.3, 517.0], [92.4, 517.0], [92.5, 517.0], [92.6, 517.0], [92.7, 517.0], [92.8, 517.0], [92.9, 517.0], [93.0, 517.0], [93.1, 517.0], [93.2, 517.0], [93.3, 517.0], [93.4, 517.0], [93.5, 517.0], [93.6, 517.0], [93.7, 517.0], [93.8, 517.0], [93.9, 517.0], [94.0, 523.0], [94.1, 523.0], [94.2, 523.0], [94.3, 523.0], [94.4, 523.0], [94.5, 523.0], [94.6, 523.0], [94.7, 523.0], [94.8, 523.0], [94.9, 523.0], [95.0, 523.0], [95.1, 523.0], [95.2, 523.0], [95.3, 523.0], [95.4, 523.0], [95.5, 523.0], [95.6, 523.0], [95.7, 523.0], [95.8, 523.0], [95.9, 523.0], [96.0, 524.0], [96.1, 524.0], [96.2, 524.0], [96.3, 524.0], [96.4, 524.0], [96.5, 524.0], [96.6, 524.0], [96.7, 524.0], [96.8, 524.0], [96.9, 524.0], [97.0, 526.0], [97.1, 526.0], [97.2, 526.0], [97.3, 526.0], [97.4, 526.0], [97.5, 526.0], [97.6, 526.0], [97.7, 526.0], [97.8, 526.0], [97.9, 526.0], [98.0, 529.0], [98.1, 529.0], [98.2, 529.0], [98.3, 529.0], [98.4, 529.0], [98.5, 529.0], [98.6, 529.0], [98.7, 529.0], [98.8, 529.0], [98.9, 529.0], [99.0, 740.0], [99.1, 740.0], [99.2, 740.0], [99.3, 740.0], [99.4, 740.0], [99.5, 740.0], [99.6, 740.0], [99.7, 740.0], [99.8, 740.0], [99.9, 740.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 34.0, "series": [{"data": [[300.0, 27.0], [700.0, 1.0], [200.0, 25.0], [400.0, 34.0], [500.0, 13.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 14.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 86.0, "series": [{"data": [[0.0, 86.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 14.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.98, "minX": 1.7433726E12, "maxY": 1.98, "series": [{"data": [[1.7433726E12, 1.98]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7433726E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 387.3163265306122, "minX": 1.0, "maxY": 628.0, "series": [{"data": [[1.0, 628.0], [2.0, 387.3163265306122]], "isOverall": false, "label": "Google", "isController": false}, {"data": [[1.98, 392.1299999999998]], "isOverall": false, "label": "Google-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 2.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 186.66666666666666, "minX": 1.7433726E12, "maxY": 1461.6666666666667, "series": [{"data": [[1.7433726E12, 1461.6666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7433726E12, 186.66666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7433726E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 392.1299999999998, "minX": 1.7433726E12, "maxY": 392.1299999999998, "series": [{"data": [[1.7433726E12, 392.1299999999998]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7433726E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 390.4199999999999, "minX": 1.7433726E12, "maxY": 390.4199999999999, "series": [{"data": [[1.7433726E12, 390.4199999999999]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7433726E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 21.88000000000001, "minX": 1.7433726E12, "maxY": 21.88000000000001, "series": [{"data": [[1.7433726E12, 21.88000000000001]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7433726E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 235.0, "minX": 1.7433726E12, "maxY": 740.0, "series": [{"data": [[1.7433726E12, 740.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7433726E12, 514.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7433726E12, 737.889999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7433726E12, 523.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7433726E12, 235.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7433726E12, 393.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7433726E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 354.0, "minX": 2.0, "maxY": 497.0, "series": [{"data": [[4.0, 497.0], [2.0, 456.5], [5.0, 390.0], [6.0, 354.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 353.5, "minX": 2.0, "maxY": 495.0, "series": [{"data": [[4.0, 495.0], [2.0, 454.5], [5.0, 389.0], [6.0, 353.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7433726E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7433726E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7433726E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7433726E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7433726E12, 1.6666666666666667]], "isOverall": false, "label": "302", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7433726E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7433726E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7433726E12, 1.6666666666666667]], "isOverall": false, "label": "Google-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7433726E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7433726E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7433726E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7433726E12, "title": "Total Transactions Per Second"}},
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

