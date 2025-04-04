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
        data: {"result": {"minY": 224.0, "minX": 0.0, "maxY": 749.0, "series": [{"data": [[0.0, 224.0], [0.1, 226.0], [0.2, 227.0], [0.3, 227.0], [0.4, 227.0], [0.5, 228.0], [0.6, 228.0], [0.7, 228.0], [0.8, 228.0], [0.9, 229.0], [1.0, 230.0], [1.1, 230.0], [1.2, 231.0], [1.3, 231.0], [1.4, 231.0], [1.5, 231.0], [1.6, 231.0], [1.7, 232.0], [1.8, 233.0], [1.9, 233.0], [2.0, 234.0], [2.1, 234.0], [2.2, 235.0], [2.3, 235.0], [2.4, 235.0], [2.5, 236.0], [2.6, 237.0], [2.7, 237.0], [2.8, 237.0], [2.9, 237.0], [3.0, 238.0], [3.1, 238.0], [3.2, 238.0], [3.3, 239.0], [3.4, 239.0], [3.5, 239.0], [3.6, 239.0], [3.7, 240.0], [3.8, 240.0], [3.9, 240.0], [4.0, 240.0], [4.1, 241.0], [4.2, 241.0], [4.3, 242.0], [4.4, 242.0], [4.5, 242.0], [4.6, 242.0], [4.7, 242.0], [4.8, 242.0], [4.9, 242.0], [5.0, 243.0], [5.1, 243.0], [5.2, 243.0], [5.3, 243.0], [5.4, 244.0], [5.5, 244.0], [5.6, 245.0], [5.7, 245.0], [5.8, 245.0], [5.9, 246.0], [6.0, 246.0], [6.1, 246.0], [6.2, 247.0], [6.3, 247.0], [6.4, 247.0], [6.5, 248.0], [6.6, 248.0], [6.7, 248.0], [6.8, 248.0], [6.9, 249.0], [7.0, 249.0], [7.1, 250.0], [7.2, 250.0], [7.3, 250.0], [7.4, 250.0], [7.5, 251.0], [7.6, 251.0], [7.7, 252.0], [7.8, 252.0], [7.9, 252.0], [8.0, 252.0], [8.1, 252.0], [8.2, 253.0], [8.3, 253.0], [8.4, 254.0], [8.5, 254.0], [8.6, 254.0], [8.7, 254.0], [8.8, 254.0], [8.9, 255.0], [9.0, 255.0], [9.1, 255.0], [9.2, 255.0], [9.3, 255.0], [9.4, 256.0], [9.5, 256.0], [9.6, 256.0], [9.7, 256.0], [9.8, 256.0], [9.9, 257.0], [10.0, 257.0], [10.1, 257.0], [10.2, 257.0], [10.3, 258.0], [10.4, 258.0], [10.5, 258.0], [10.6, 258.0], [10.7, 258.0], [10.8, 259.0], [10.9, 259.0], [11.0, 259.0], [11.1, 260.0], [11.2, 260.0], [11.3, 261.0], [11.4, 261.0], [11.5, 262.0], [11.6, 263.0], [11.7, 263.0], [11.8, 263.0], [11.9, 264.0], [12.0, 264.0], [12.1, 264.0], [12.2, 264.0], [12.3, 266.0], [12.4, 266.0], [12.5, 266.0], [12.6, 267.0], [12.7, 267.0], [12.8, 268.0], [12.9, 268.0], [13.0, 268.0], [13.1, 268.0], [13.2, 269.0], [13.3, 269.0], [13.4, 269.0], [13.5, 270.0], [13.6, 271.0], [13.7, 271.0], [13.8, 272.0], [13.9, 272.0], [14.0, 273.0], [14.1, 273.0], [14.2, 273.0], [14.3, 273.0], [14.4, 274.0], [14.5, 275.0], [14.6, 275.0], [14.7, 275.0], [14.8, 276.0], [14.9, 276.0], [15.0, 276.0], [15.1, 276.0], [15.2, 276.0], [15.3, 277.0], [15.4, 277.0], [15.5, 277.0], [15.6, 278.0], [15.7, 278.0], [15.8, 278.0], [15.9, 279.0], [16.0, 279.0], [16.1, 280.0], [16.2, 281.0], [16.3, 281.0], [16.4, 282.0], [16.5, 282.0], [16.6, 282.0], [16.7, 283.0], [16.8, 283.0], [16.9, 284.0], [17.0, 284.0], [17.1, 285.0], [17.2, 285.0], [17.3, 285.0], [17.4, 285.0], [17.5, 286.0], [17.6, 286.0], [17.7, 286.0], [17.8, 286.0], [17.9, 287.0], [18.0, 287.0], [18.1, 287.0], [18.2, 288.0], [18.3, 288.0], [18.4, 288.0], [18.5, 289.0], [18.6, 289.0], [18.7, 289.0], [18.8, 290.0], [18.9, 290.0], [19.0, 290.0], [19.1, 290.0], [19.2, 290.0], [19.3, 291.0], [19.4, 291.0], [19.5, 291.0], [19.6, 291.0], [19.7, 292.0], [19.8, 292.0], [19.9, 292.0], [20.0, 292.0], [20.1, 293.0], [20.2, 293.0], [20.3, 293.0], [20.4, 294.0], [20.5, 294.0], [20.6, 294.0], [20.7, 294.0], [20.8, 295.0], [20.9, 295.0], [21.0, 295.0], [21.1, 296.0], [21.2, 296.0], [21.3, 296.0], [21.4, 296.0], [21.5, 296.0], [21.6, 296.0], [21.7, 296.0], [21.8, 297.0], [21.9, 297.0], [22.0, 297.0], [22.1, 297.0], [22.2, 298.0], [22.3, 298.0], [22.4, 299.0], [22.5, 299.0], [22.6, 300.0], [22.7, 300.0], [22.8, 300.0], [22.9, 300.0], [23.0, 301.0], [23.1, 301.0], [23.2, 301.0], [23.3, 301.0], [23.4, 301.0], [23.5, 302.0], [23.6, 302.0], [23.7, 302.0], [23.8, 302.0], [23.9, 302.0], [24.0, 302.0], [24.1, 303.0], [24.2, 304.0], [24.3, 304.0], [24.4, 304.0], [24.5, 304.0], [24.6, 305.0], [24.7, 305.0], [24.8, 306.0], [24.9, 306.0], [25.0, 306.0], [25.1, 306.0], [25.2, 306.0], [25.3, 306.0], [25.4, 307.0], [25.5, 307.0], [25.6, 307.0], [25.7, 307.0], [25.8, 308.0], [25.9, 308.0], [26.0, 308.0], [26.1, 308.0], [26.2, 308.0], [26.3, 308.0], [26.4, 308.0], [26.5, 308.0], [26.6, 308.0], [26.7, 309.0], [26.8, 309.0], [26.9, 310.0], [27.0, 310.0], [27.1, 310.0], [27.2, 311.0], [27.3, 311.0], [27.4, 311.0], [27.5, 312.0], [27.6, 312.0], [27.7, 312.0], [27.8, 312.0], [27.9, 313.0], [28.0, 313.0], [28.1, 313.0], [28.2, 314.0], [28.3, 314.0], [28.4, 314.0], [28.5, 315.0], [28.6, 315.0], [28.7, 316.0], [28.8, 316.0], [28.9, 317.0], [29.0, 317.0], [29.1, 318.0], [29.2, 318.0], [29.3, 319.0], [29.4, 319.0], [29.5, 319.0], [29.6, 320.0], [29.7, 320.0], [29.8, 320.0], [29.9, 320.0], [30.0, 321.0], [30.1, 321.0], [30.2, 321.0], [30.3, 321.0], [30.4, 322.0], [30.5, 322.0], [30.6, 322.0], [30.7, 322.0], [30.8, 322.0], [30.9, 323.0], [31.0, 323.0], [31.1, 324.0], [31.2, 324.0], [31.3, 324.0], [31.4, 324.0], [31.5, 324.0], [31.6, 325.0], [31.7, 325.0], [31.8, 325.0], [31.9, 325.0], [32.0, 326.0], [32.1, 326.0], [32.2, 326.0], [32.3, 327.0], [32.4, 327.0], [32.5, 327.0], [32.6, 327.0], [32.7, 327.0], [32.8, 328.0], [32.9, 328.0], [33.0, 329.0], [33.1, 329.0], [33.2, 330.0], [33.3, 330.0], [33.4, 331.0], [33.5, 331.0], [33.6, 332.0], [33.7, 332.0], [33.8, 332.0], [33.9, 332.0], [34.0, 333.0], [34.1, 333.0], [34.2, 333.0], [34.3, 333.0], [34.4, 333.0], [34.5, 333.0], [34.6, 333.0], [34.7, 334.0], [34.8, 334.0], [34.9, 334.0], [35.0, 334.0], [35.1, 334.0], [35.2, 335.0], [35.3, 335.0], [35.4, 335.0], [35.5, 336.0], [35.6, 336.0], [35.7, 336.0], [35.8, 336.0], [35.9, 337.0], [36.0, 337.0], [36.1, 337.0], [36.2, 337.0], [36.3, 337.0], [36.4, 337.0], [36.5, 338.0], [36.6, 338.0], [36.7, 338.0], [36.8, 339.0], [36.9, 339.0], [37.0, 339.0], [37.1, 339.0], [37.2, 339.0], [37.3, 339.0], [37.4, 339.0], [37.5, 339.0], [37.6, 339.0], [37.7, 339.0], [37.8, 340.0], [37.9, 340.0], [38.0, 341.0], [38.1, 341.0], [38.2, 341.0], [38.3, 341.0], [38.4, 341.0], [38.5, 341.0], [38.6, 342.0], [38.7, 342.0], [38.8, 342.0], [38.9, 342.0], [39.0, 343.0], [39.1, 343.0], [39.2, 344.0], [39.3, 344.0], [39.4, 344.0], [39.5, 344.0], [39.6, 346.0], [39.7, 346.0], [39.8, 346.0], [39.9, 346.0], [40.0, 346.0], [40.1, 347.0], [40.2, 347.0], [40.3, 348.0], [40.4, 348.0], [40.5, 349.0], [40.6, 349.0], [40.7, 349.0], [40.8, 349.0], [40.9, 349.0], [41.0, 350.0], [41.1, 350.0], [41.2, 351.0], [41.3, 351.0], [41.4, 352.0], [41.5, 352.0], [41.6, 352.0], [41.7, 353.0], [41.8, 353.0], [41.9, 353.0], [42.0, 353.0], [42.1, 353.0], [42.2, 354.0], [42.3, 354.0], [42.4, 354.0], [42.5, 355.0], [42.6, 355.0], [42.7, 356.0], [42.8, 357.0], [42.9, 357.0], [43.0, 357.0], [43.1, 357.0], [43.2, 358.0], [43.3, 358.0], [43.4, 358.0], [43.5, 359.0], [43.6, 359.0], [43.7, 359.0], [43.8, 359.0], [43.9, 360.0], [44.0, 360.0], [44.1, 360.0], [44.2, 360.0], [44.3, 360.0], [44.4, 361.0], [44.5, 361.0], [44.6, 361.0], [44.7, 361.0], [44.8, 362.0], [44.9, 362.0], [45.0, 363.0], [45.1, 363.0], [45.2, 363.0], [45.3, 363.0], [45.4, 364.0], [45.5, 365.0], [45.6, 365.0], [45.7, 365.0], [45.8, 366.0], [45.9, 366.0], [46.0, 366.0], [46.1, 366.0], [46.2, 367.0], [46.3, 367.0], [46.4, 367.0], [46.5, 368.0], [46.6, 368.0], [46.7, 368.0], [46.8, 369.0], [46.9, 369.0], [47.0, 369.0], [47.1, 369.0], [47.2, 369.0], [47.3, 369.0], [47.4, 370.0], [47.5, 370.0], [47.6, 371.0], [47.7, 371.0], [47.8, 371.0], [47.9, 371.0], [48.0, 372.0], [48.1, 372.0], [48.2, 373.0], [48.3, 373.0], [48.4, 374.0], [48.5, 374.0], [48.6, 374.0], [48.7, 374.0], [48.8, 374.0], [48.9, 374.0], [49.0, 374.0], [49.1, 375.0], [49.2, 375.0], [49.3, 375.0], [49.4, 375.0], [49.5, 375.0], [49.6, 376.0], [49.7, 376.0], [49.8, 377.0], [49.9, 377.0], [50.0, 378.0], [50.1, 378.0], [50.2, 378.0], [50.3, 378.0], [50.4, 378.0], [50.5, 379.0], [50.6, 379.0], [50.7, 379.0], [50.8, 380.0], [50.9, 381.0], [51.0, 381.0], [51.1, 381.0], [51.2, 381.0], [51.3, 382.0], [51.4, 382.0], [51.5, 382.0], [51.6, 383.0], [51.7, 383.0], [51.8, 383.0], [51.9, 383.0], [52.0, 383.0], [52.1, 384.0], [52.2, 384.0], [52.3, 384.0], [52.4, 385.0], [52.5, 385.0], [52.6, 385.0], [52.7, 385.0], [52.8, 386.0], [52.9, 386.0], [53.0, 386.0], [53.1, 386.0], [53.2, 387.0], [53.3, 388.0], [53.4, 388.0], [53.5, 388.0], [53.6, 388.0], [53.7, 388.0], [53.8, 389.0], [53.9, 389.0], [54.0, 389.0], [54.1, 390.0], [54.2, 390.0], [54.3, 390.0], [54.4, 390.0], [54.5, 390.0], [54.6, 391.0], [54.7, 391.0], [54.8, 392.0], [54.9, 392.0], [55.0, 392.0], [55.1, 392.0], [55.2, 392.0], [55.3, 393.0], [55.4, 393.0], [55.5, 393.0], [55.6, 393.0], [55.7, 393.0], [55.8, 394.0], [55.9, 394.0], [56.0, 394.0], [56.1, 394.0], [56.2, 394.0], [56.3, 395.0], [56.4, 395.0], [56.5, 395.0], [56.6, 395.0], [56.7, 396.0], [56.8, 396.0], [56.9, 396.0], [57.0, 396.0], [57.1, 396.0], [57.2, 396.0], [57.3, 396.0], [57.4, 397.0], [57.5, 397.0], [57.6, 397.0], [57.7, 397.0], [57.8, 398.0], [57.9, 398.0], [58.0, 398.0], [58.1, 398.0], [58.2, 399.0], [58.3, 399.0], [58.4, 399.0], [58.5, 399.0], [58.6, 399.0], [58.7, 400.0], [58.8, 400.0], [58.9, 400.0], [59.0, 401.0], [59.1, 401.0], [59.2, 401.0], [59.3, 401.0], [59.4, 402.0], [59.5, 402.0], [59.6, 403.0], [59.7, 403.0], [59.8, 403.0], [59.9, 404.0], [60.0, 405.0], [60.1, 406.0], [60.2, 406.0], [60.3, 407.0], [60.4, 407.0], [60.5, 407.0], [60.6, 408.0], [60.7, 408.0], [60.8, 409.0], [60.9, 409.0], [61.0, 409.0], [61.1, 409.0], [61.2, 409.0], [61.3, 410.0], [61.4, 410.0], [61.5, 410.0], [61.6, 410.0], [61.7, 411.0], [61.8, 411.0], [61.9, 411.0], [62.0, 411.0], [62.1, 412.0], [62.2, 412.0], [62.3, 413.0], [62.4, 413.0], [62.5, 414.0], [62.6, 414.0], [62.7, 415.0], [62.8, 415.0], [62.9, 415.0], [63.0, 416.0], [63.1, 416.0], [63.2, 416.0], [63.3, 416.0], [63.4, 417.0], [63.5, 417.0], [63.6, 417.0], [63.7, 418.0], [63.8, 418.0], [63.9, 418.0], [64.0, 419.0], [64.1, 419.0], [64.2, 419.0], [64.3, 419.0], [64.4, 420.0], [64.5, 420.0], [64.6, 420.0], [64.7, 420.0], [64.8, 420.0], [64.9, 420.0], [65.0, 421.0], [65.1, 421.0], [65.2, 422.0], [65.3, 422.0], [65.4, 423.0], [65.5, 423.0], [65.6, 425.0], [65.7, 425.0], [65.8, 425.0], [65.9, 425.0], [66.0, 426.0], [66.1, 426.0], [66.2, 427.0], [66.3, 427.0], [66.4, 428.0], [66.5, 428.0], [66.6, 428.0], [66.7, 429.0], [66.8, 429.0], [66.9, 429.0], [67.0, 430.0], [67.1, 430.0], [67.2, 430.0], [67.3, 431.0], [67.4, 431.0], [67.5, 431.0], [67.6, 431.0], [67.7, 431.0], [67.8, 432.0], [67.9, 432.0], [68.0, 432.0], [68.1, 433.0], [68.2, 433.0], [68.3, 433.0], [68.4, 433.0], [68.5, 434.0], [68.6, 434.0], [68.7, 434.0], [68.8, 434.0], [68.9, 435.0], [69.0, 435.0], [69.1, 436.0], [69.2, 436.0], [69.3, 436.0], [69.4, 436.0], [69.5, 436.0], [69.6, 436.0], [69.7, 436.0], [69.8, 436.0], [69.9, 437.0], [70.0, 437.0], [70.1, 438.0], [70.2, 438.0], [70.3, 439.0], [70.4, 439.0], [70.5, 439.0], [70.6, 440.0], [70.7, 440.0], [70.8, 441.0], [70.9, 441.0], [71.0, 441.0], [71.1, 441.0], [71.2, 441.0], [71.3, 441.0], [71.4, 442.0], [71.5, 442.0], [71.6, 442.0], [71.7, 442.0], [71.8, 442.0], [71.9, 442.0], [72.0, 442.0], [72.1, 442.0], [72.2, 443.0], [72.3, 443.0], [72.4, 443.0], [72.5, 444.0], [72.6, 444.0], [72.7, 445.0], [72.8, 445.0], [72.9, 446.0], [73.0, 446.0], [73.1, 446.0], [73.2, 446.0], [73.3, 446.0], [73.4, 447.0], [73.5, 447.0], [73.6, 447.0], [73.7, 447.0], [73.8, 448.0], [73.9, 448.0], [74.0, 448.0], [74.1, 448.0], [74.2, 448.0], [74.3, 448.0], [74.4, 448.0], [74.5, 449.0], [74.6, 450.0], [74.7, 450.0], [74.8, 450.0], [74.9, 450.0], [75.0, 450.0], [75.1, 451.0], [75.2, 451.0], [75.3, 451.0], [75.4, 451.0], [75.5, 452.0], [75.6, 453.0], [75.7, 453.0], [75.8, 453.0], [75.9, 453.0], [76.0, 453.0], [76.1, 454.0], [76.2, 454.0], [76.3, 454.0], [76.4, 454.0], [76.5, 455.0], [76.6, 455.0], [76.7, 455.0], [76.8, 455.0], [76.9, 456.0], [77.0, 456.0], [77.1, 457.0], [77.2, 457.0], [77.3, 457.0], [77.4, 457.0], [77.5, 457.0], [77.6, 457.0], [77.7, 458.0], [77.8, 458.0], [77.9, 458.0], [78.0, 458.0], [78.1, 458.0], [78.2, 459.0], [78.3, 459.0], [78.4, 460.0], [78.5, 460.0], [78.6, 460.0], [78.7, 461.0], [78.8, 461.0], [78.9, 461.0], [79.0, 461.0], [79.1, 461.0], [79.2, 461.0], [79.3, 462.0], [79.4, 462.0], [79.5, 462.0], [79.6, 462.0], [79.7, 463.0], [79.8, 463.0], [79.9, 463.0], [80.0, 463.0], [80.1, 464.0], [80.2, 464.0], [80.3, 464.0], [80.4, 464.0], [80.5, 466.0], [80.6, 466.0], [80.7, 466.0], [80.8, 466.0], [80.9, 467.0], [81.0, 467.0], [81.1, 467.0], [81.2, 468.0], [81.3, 468.0], [81.4, 468.0], [81.5, 468.0], [81.6, 469.0], [81.7, 469.0], [81.8, 469.0], [81.9, 469.0], [82.0, 470.0], [82.1, 470.0], [82.2, 470.0], [82.3, 470.0], [82.4, 471.0], [82.5, 471.0], [82.6, 471.0], [82.7, 471.0], [82.8, 472.0], [82.9, 472.0], [83.0, 472.0], [83.1, 472.0], [83.2, 473.0], [83.3, 473.0], [83.4, 474.0], [83.5, 474.0], [83.6, 474.0], [83.7, 475.0], [83.8, 475.0], [83.9, 475.0], [84.0, 475.0], [84.1, 477.0], [84.2, 477.0], [84.3, 477.0], [84.4, 477.0], [84.5, 477.0], [84.6, 478.0], [84.7, 478.0], [84.8, 478.0], [84.9, 478.0], [85.0, 478.0], [85.1, 479.0], [85.2, 479.0], [85.3, 480.0], [85.4, 480.0], [85.5, 480.0], [85.6, 480.0], [85.7, 481.0], [85.8, 481.0], [85.9, 481.0], [86.0, 481.0], [86.1, 481.0], [86.2, 482.0], [86.3, 482.0], [86.4, 482.0], [86.5, 482.0], [86.6, 483.0], [86.7, 483.0], [86.8, 483.0], [86.9, 483.0], [87.0, 483.0], [87.1, 484.0], [87.2, 484.0], [87.3, 484.0], [87.4, 485.0], [87.5, 485.0], [87.6, 485.0], [87.7, 485.0], [87.8, 485.0], [87.9, 485.0], [88.0, 486.0], [88.1, 486.0], [88.2, 486.0], [88.3, 486.0], [88.4, 486.0], [88.5, 486.0], [88.6, 487.0], [88.7, 487.0], [88.8, 487.0], [88.9, 488.0], [89.0, 490.0], [89.1, 490.0], [89.2, 490.0], [89.3, 490.0], [89.4, 491.0], [89.5, 491.0], [89.6, 491.0], [89.7, 491.0], [89.8, 491.0], [89.9, 492.0], [90.0, 492.0], [90.1, 492.0], [90.2, 494.0], [90.3, 494.0], [90.4, 495.0], [90.5, 495.0], [90.6, 497.0], [90.7, 497.0], [90.8, 497.0], [90.9, 497.0], [91.0, 498.0], [91.1, 498.0], [91.2, 498.0], [91.3, 499.0], [91.4, 499.0], [91.5, 499.0], [91.6, 500.0], [91.7, 500.0], [91.8, 500.0], [91.9, 501.0], [92.0, 501.0], [92.1, 501.0], [92.2, 501.0], [92.3, 502.0], [92.4, 503.0], [92.5, 504.0], [92.6, 504.0], [92.7, 504.0], [92.8, 504.0], [92.9, 504.0], [93.0, 504.0], [93.1, 504.0], [93.2, 505.0], [93.3, 505.0], [93.4, 505.0], [93.5, 505.0], [93.6, 505.0], [93.7, 505.0], [93.8, 506.0], [93.9, 507.0], [94.0, 509.0], [94.1, 510.0], [94.2, 510.0], [94.3, 511.0], [94.4, 511.0], [94.5, 511.0], [94.6, 511.0], [94.7, 512.0], [94.8, 512.0], [94.9, 513.0], [95.0, 513.0], [95.1, 513.0], [95.2, 513.0], [95.3, 514.0], [95.4, 514.0], [95.5, 514.0], [95.6, 514.0], [95.7, 515.0], [95.8, 515.0], [95.9, 516.0], [96.0, 516.0], [96.1, 517.0], [96.2, 517.0], [96.3, 517.0], [96.4, 517.0], [96.5, 517.0], [96.6, 517.0], [96.7, 518.0], [96.8, 518.0], [96.9, 519.0], [97.0, 519.0], [97.1, 519.0], [97.2, 520.0], [97.3, 520.0], [97.4, 520.0], [97.5, 520.0], [97.6, 521.0], [97.7, 521.0], [97.8, 521.0], [97.9, 521.0], [98.0, 522.0], [98.1, 522.0], [98.2, 523.0], [98.3, 523.0], [98.4, 523.0], [98.5, 524.0], [98.6, 524.0], [98.7, 524.0], [98.8, 526.0], [98.9, 527.0], [99.0, 527.0], [99.1, 527.0], [99.2, 528.0], [99.3, 528.0], [99.4, 528.0], [99.5, 529.0], [99.6, 530.0], [99.7, 531.0], [99.8, 534.0], [99.9, 534.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 449.0, "series": [{"data": [[300.0, 449.0], [700.0, 1.0], [200.0, 280.0], [400.0, 410.0], [500.0, 104.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 102.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1142.0, "series": [{"data": [[0.0, 1142.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 102.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.125, "minX": 1.74337218E12, "maxY": 6.922794117647065, "series": [{"data": [[1.74337224E12, 6.922794117647065], [1.7433723E12, 6.858108108108108], [1.74337218E12, 2.125]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7433723E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 344.16666666666663, "minX": 1.0, "maxY": 633.5, "series": [{"data": [[1.0, 633.5], [2.0, 344.16666666666663], [4.0, 395.8], [5.0, 399.8666666666667], [3.0, 384.14285714285717], [6.0, 396.3571428571429], [7.0, 376.6159663865547]], "isOverall": false, "label": "Google", "isController": false}, {"data": [[6.884244372990347, 377.57154340836036]], "isOverall": false, "label": "Google-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 7.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 14.933333333333334, "minX": 1.74337218E12, "maxY": 15902.933333333332, "series": [{"data": [[1.74337224E12, 15902.933333333332], [1.7433723E12, 2163.266666666667], [1.74337218E12, 116.93333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74337224E12, 2030.9333333333334], [1.7433723E12, 276.26666666666665], [1.74337218E12, 14.933333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7433723E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 376.8694852941177, "minX": 1.74337218E12, "maxY": 389.00000000000006, "series": [{"data": [[1.74337224E12, 376.8694852941177], [1.7433723E12, 382.11486486486484], [1.74337218E12, 389.00000000000006]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7433723E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 375.50183823529443, "minX": 1.74337218E12, "maxY": 386.5, "series": [{"data": [[1.74337224E12, 375.50183823529443], [1.7433723E12, 380.74324324324306], [1.74337218E12, 386.5]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7433723E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 16.533783783783786, "minX": 1.74337218E12, "maxY": 54.75000000000001, "series": [{"data": [[1.74337224E12, 16.769301470588267], [1.7433723E12, 16.533783783783786], [1.74337218E12, 54.75000000000001]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7433723E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 224.0, "minX": 1.74337218E12, "maxY": 749.0, "series": [{"data": [[1.74337224E12, 534.0], [1.7433723E12, 534.0], [1.74337218E12, 749.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74337224E12, 492.0], [1.7433723E12, 491.4], [1.74337218E12, 749.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74337224E12, 526.1099999999999], [1.7433723E12, 531.55], [1.74337218E12, 749.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74337224E12, 513.0], [1.7433723E12, 509.8499999999999], [1.74337218E12, 749.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74337224E12, 224.0], [1.7433723E12, 228.0], [1.74337218E12, 292.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74337224E12, 377.5], [1.7433723E12, 388.0], [1.74337218E12, 317.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7433723E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 352.5, "minX": 2.0, "maxY": 442.0, "series": [{"data": [[2.0, 437.0], [16.0, 385.5], [17.0, 384.0], [18.0, 382.0], [19.0, 378.0], [20.0, 352.5], [21.0, 392.0], [11.0, 442.0], [22.0, 359.5], [6.0, 379.0], [14.0, 396.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 351.5, "minX": 2.0, "maxY": 441.0, "series": [{"data": [[2.0, 436.5], [16.0, 383.0], [17.0, 383.0], [18.0, 380.0], [19.0, 378.0], [20.0, 351.5], [21.0, 390.0], [11.0, 441.0], [22.0, 358.0], [6.0, 378.0], [14.0, 395.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.74337218E12, "maxY": 18.2, "series": [{"data": [[1.74337224E12, 18.2], [1.7433723E12, 2.35], [1.74337218E12, 0.18333333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7433723E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.74337218E12, "maxY": 18.133333333333333, "series": [{"data": [[1.74337224E12, 18.133333333333333], [1.7433723E12, 2.466666666666667], [1.74337218E12, 0.13333333333333333]], "isOverall": false, "label": "302", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7433723E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.74337218E12, "maxY": 18.133333333333333, "series": [{"data": [[1.74337224E12, 18.133333333333333], [1.7433723E12, 2.466666666666667], [1.74337218E12, 0.13333333333333333]], "isOverall": false, "label": "Google-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7433723E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.74337218E12, "maxY": 18.133333333333333, "series": [{"data": [[1.74337224E12, 18.133333333333333], [1.7433723E12, 2.466666666666667], [1.74337218E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7433723E12, "title": "Total Transactions Per Second"}},
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

