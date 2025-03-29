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
        data: {"result": {"minY": 222.0, "minX": 0.0, "maxY": 1289.0, "series": [{"data": [[0.0, 222.0], [0.1, 225.0], [0.2, 227.0], [0.3, 227.0], [0.4, 228.0], [0.5, 228.0], [0.6, 230.0], [0.7, 230.0], [0.8, 231.0], [0.9, 231.0], [1.0, 231.0], [1.1, 232.0], [1.2, 232.0], [1.3, 232.0], [1.4, 232.0], [1.5, 232.0], [1.6, 233.0], [1.7, 233.0], [1.8, 234.0], [1.9, 234.0], [2.0, 234.0], [2.1, 234.0], [2.2, 235.0], [2.3, 236.0], [2.4, 236.0], [2.5, 236.0], [2.6, 237.0], [2.7, 237.0], [2.8, 238.0], [2.9, 238.0], [3.0, 239.0], [3.1, 239.0], [3.2, 239.0], [3.3, 239.0], [3.4, 240.0], [3.5, 240.0], [3.6, 240.0], [3.7, 241.0], [3.8, 241.0], [3.9, 242.0], [4.0, 242.0], [4.1, 242.0], [4.2, 242.0], [4.3, 243.0], [4.4, 244.0], [4.5, 244.0], [4.6, 245.0], [4.7, 245.0], [4.8, 246.0], [4.9, 246.0], [5.0, 246.0], [5.1, 247.0], [5.2, 248.0], [5.3, 248.0], [5.4, 248.0], [5.5, 248.0], [5.6, 248.0], [5.7, 249.0], [5.8, 249.0], [5.9, 249.0], [6.0, 249.0], [6.1, 250.0], [6.2, 251.0], [6.3, 251.0], [6.4, 252.0], [6.5, 252.0], [6.6, 253.0], [6.7, 253.0], [6.8, 253.0], [6.9, 253.0], [7.0, 253.0], [7.1, 254.0], [7.2, 254.0], [7.3, 255.0], [7.4, 255.0], [7.5, 255.0], [7.6, 256.0], [7.7, 256.0], [7.8, 256.0], [7.9, 256.0], [8.0, 257.0], [8.1, 258.0], [8.2, 258.0], [8.3, 258.0], [8.4, 258.0], [8.5, 258.0], [8.6, 258.0], [8.7, 259.0], [8.8, 260.0], [8.9, 260.0], [9.0, 260.0], [9.1, 260.0], [9.2, 260.0], [9.3, 261.0], [9.4, 261.0], [9.5, 261.0], [9.6, 262.0], [9.7, 262.0], [9.8, 262.0], [9.9, 262.0], [10.0, 263.0], [10.1, 263.0], [10.2, 263.0], [10.3, 263.0], [10.4, 263.0], [10.5, 263.0], [10.6, 263.0], [10.7, 263.0], [10.8, 265.0], [10.9, 265.0], [11.0, 265.0], [11.1, 265.0], [11.2, 266.0], [11.3, 266.0], [11.4, 266.0], [11.5, 266.0], [11.6, 267.0], [11.7, 267.0], [11.8, 268.0], [11.9, 268.0], [12.0, 268.0], [12.1, 268.0], [12.2, 270.0], [12.3, 270.0], [12.4, 271.0], [12.5, 271.0], [12.6, 272.0], [12.7, 272.0], [12.8, 272.0], [12.9, 273.0], [13.0, 273.0], [13.1, 274.0], [13.2, 274.0], [13.3, 274.0], [13.4, 275.0], [13.5, 275.0], [13.6, 275.0], [13.7, 275.0], [13.8, 276.0], [13.9, 276.0], [14.0, 276.0], [14.1, 277.0], [14.2, 277.0], [14.3, 277.0], [14.4, 277.0], [14.5, 277.0], [14.6, 277.0], [14.7, 278.0], [14.8, 278.0], [14.9, 278.0], [15.0, 279.0], [15.1, 279.0], [15.2, 280.0], [15.3, 280.0], [15.4, 280.0], [15.5, 280.0], [15.6, 281.0], [15.7, 281.0], [15.8, 282.0], [15.9, 282.0], [16.0, 282.0], [16.1, 282.0], [16.2, 283.0], [16.3, 283.0], [16.4, 284.0], [16.5, 284.0], [16.6, 284.0], [16.7, 285.0], [16.8, 285.0], [16.9, 285.0], [17.0, 286.0], [17.1, 287.0], [17.2, 287.0], [17.3, 287.0], [17.4, 287.0], [17.5, 288.0], [17.6, 288.0], [17.7, 288.0], [17.8, 289.0], [17.9, 289.0], [18.0, 289.0], [18.1, 289.0], [18.2, 290.0], [18.3, 290.0], [18.4, 290.0], [18.5, 290.0], [18.6, 290.0], [18.7, 291.0], [18.8, 291.0], [18.9, 291.0], [19.0, 291.0], [19.1, 292.0], [19.2, 292.0], [19.3, 293.0], [19.4, 293.0], [19.5, 293.0], [19.6, 293.0], [19.7, 293.0], [19.8, 294.0], [19.9, 294.0], [20.0, 294.0], [20.1, 295.0], [20.2, 295.0], [20.3, 295.0], [20.4, 295.0], [20.5, 295.0], [20.6, 295.0], [20.7, 295.0], [20.8, 295.0], [20.9, 295.0], [21.0, 296.0], [21.1, 296.0], [21.2, 296.0], [21.3, 296.0], [21.4, 297.0], [21.5, 297.0], [21.6, 297.0], [21.7, 297.0], [21.8, 297.0], [21.9, 298.0], [22.0, 298.0], [22.1, 298.0], [22.2, 299.0], [22.3, 299.0], [22.4, 300.0], [22.5, 300.0], [22.6, 300.0], [22.7, 301.0], [22.8, 301.0], [22.9, 301.0], [23.0, 301.0], [23.1, 302.0], [23.2, 302.0], [23.3, 302.0], [23.4, 303.0], [23.5, 303.0], [23.6, 304.0], [23.7, 304.0], [23.8, 304.0], [23.9, 305.0], [24.0, 305.0], [24.1, 305.0], [24.2, 306.0], [24.3, 306.0], [24.4, 306.0], [24.5, 306.0], [24.6, 306.0], [24.7, 307.0], [24.8, 307.0], [24.9, 308.0], [25.0, 308.0], [25.1, 308.0], [25.2, 308.0], [25.3, 309.0], [25.4, 309.0], [25.5, 310.0], [25.6, 310.0], [25.7, 310.0], [25.8, 310.0], [25.9, 310.0], [26.0, 310.0], [26.1, 311.0], [26.2, 311.0], [26.3, 311.0], [26.4, 312.0], [26.5, 312.0], [26.6, 312.0], [26.7, 312.0], [26.8, 312.0], [26.9, 313.0], [27.0, 313.0], [27.1, 313.0], [27.2, 313.0], [27.3, 313.0], [27.4, 313.0], [27.5, 313.0], [27.6, 314.0], [27.7, 314.0], [27.8, 314.0], [27.9, 314.0], [28.0, 315.0], [28.1, 315.0], [28.2, 316.0], [28.3, 316.0], [28.4, 316.0], [28.5, 316.0], [28.6, 316.0], [28.7, 316.0], [28.8, 316.0], [28.9, 317.0], [29.0, 317.0], [29.1, 317.0], [29.2, 318.0], [29.3, 318.0], [29.4, 318.0], [29.5, 318.0], [29.6, 318.0], [29.7, 319.0], [29.8, 319.0], [29.9, 319.0], [30.0, 319.0], [30.1, 319.0], [30.2, 320.0], [30.3, 320.0], [30.4, 320.0], [30.5, 320.0], [30.6, 321.0], [30.7, 321.0], [30.8, 321.0], [30.9, 321.0], [31.0, 321.0], [31.1, 321.0], [31.2, 322.0], [31.3, 322.0], [31.4, 323.0], [31.5, 323.0], [31.6, 323.0], [31.7, 324.0], [31.8, 324.0], [31.9, 324.0], [32.0, 324.0], [32.1, 325.0], [32.2, 325.0], [32.3, 325.0], [32.4, 326.0], [32.5, 326.0], [32.6, 327.0], [32.7, 327.0], [32.8, 327.0], [32.9, 327.0], [33.0, 328.0], [33.1, 328.0], [33.2, 328.0], [33.3, 329.0], [33.4, 329.0], [33.5, 329.0], [33.6, 330.0], [33.7, 330.0], [33.8, 330.0], [33.9, 331.0], [34.0, 331.0], [34.1, 331.0], [34.2, 332.0], [34.3, 333.0], [34.4, 333.0], [34.5, 333.0], [34.6, 333.0], [34.7, 333.0], [34.8, 334.0], [34.9, 334.0], [35.0, 334.0], [35.1, 334.0], [35.2, 335.0], [35.3, 335.0], [35.4, 336.0], [35.5, 337.0], [35.6, 337.0], [35.7, 337.0], [35.8, 337.0], [35.9, 337.0], [36.0, 337.0], [36.1, 338.0], [36.2, 338.0], [36.3, 338.0], [36.4, 338.0], [36.5, 340.0], [36.6, 340.0], [36.7, 340.0], [36.8, 340.0], [36.9, 341.0], [37.0, 341.0], [37.1, 341.0], [37.2, 342.0], [37.3, 342.0], [37.4, 342.0], [37.5, 343.0], [37.6, 343.0], [37.7, 343.0], [37.8, 344.0], [37.9, 344.0], [38.0, 344.0], [38.1, 345.0], [38.2, 345.0], [38.3, 345.0], [38.4, 345.0], [38.5, 345.0], [38.6, 346.0], [38.7, 346.0], [38.8, 346.0], [38.9, 346.0], [39.0, 347.0], [39.1, 347.0], [39.2, 347.0], [39.3, 347.0], [39.4, 348.0], [39.5, 348.0], [39.6, 348.0], [39.7, 348.0], [39.8, 349.0], [39.9, 349.0], [40.0, 349.0], [40.1, 349.0], [40.2, 350.0], [40.3, 350.0], [40.4, 351.0], [40.5, 351.0], [40.6, 351.0], [40.7, 351.0], [40.8, 351.0], [40.9, 351.0], [41.0, 352.0], [41.1, 354.0], [41.2, 355.0], [41.3, 355.0], [41.4, 355.0], [41.5, 355.0], [41.6, 355.0], [41.7, 355.0], [41.8, 355.0], [41.9, 356.0], [42.0, 356.0], [42.1, 356.0], [42.2, 356.0], [42.3, 357.0], [42.4, 357.0], [42.5, 358.0], [42.6, 358.0], [42.7, 358.0], [42.8, 358.0], [42.9, 358.0], [43.0, 358.0], [43.1, 359.0], [43.2, 359.0], [43.3, 359.0], [43.4, 360.0], [43.5, 361.0], [43.6, 361.0], [43.7, 361.0], [43.8, 361.0], [43.9, 362.0], [44.0, 362.0], [44.1, 362.0], [44.2, 362.0], [44.3, 362.0], [44.4, 362.0], [44.5, 362.0], [44.6, 364.0], [44.7, 364.0], [44.8, 364.0], [44.9, 364.0], [45.0, 364.0], [45.1, 365.0], [45.2, 365.0], [45.3, 365.0], [45.4, 366.0], [45.5, 366.0], [45.6, 366.0], [45.7, 366.0], [45.8, 366.0], [45.9, 366.0], [46.0, 367.0], [46.1, 368.0], [46.2, 368.0], [46.3, 369.0], [46.4, 369.0], [46.5, 369.0], [46.6, 370.0], [46.7, 370.0], [46.8, 370.0], [46.9, 371.0], [47.0, 371.0], [47.1, 371.0], [47.2, 372.0], [47.3, 372.0], [47.4, 372.0], [47.5, 372.0], [47.6, 373.0], [47.7, 373.0], [47.8, 373.0], [47.9, 373.0], [48.0, 373.0], [48.1, 374.0], [48.2, 374.0], [48.3, 374.0], [48.4, 374.0], [48.5, 374.0], [48.6, 375.0], [48.7, 375.0], [48.8, 376.0], [48.9, 376.0], [49.0, 376.0], [49.1, 377.0], [49.2, 377.0], [49.3, 378.0], [49.4, 378.0], [49.5, 378.0], [49.6, 378.0], [49.7, 379.0], [49.8, 379.0], [49.9, 379.0], [50.0, 379.0], [50.1, 380.0], [50.2, 380.0], [50.3, 381.0], [50.4, 381.0], [50.5, 382.0], [50.6, 382.0], [50.7, 382.0], [50.8, 383.0], [50.9, 383.0], [51.0, 383.0], [51.1, 383.0], [51.2, 383.0], [51.3, 384.0], [51.4, 384.0], [51.5, 384.0], [51.6, 385.0], [51.7, 385.0], [51.8, 385.0], [51.9, 385.0], [52.0, 386.0], [52.1, 386.0], [52.2, 386.0], [52.3, 387.0], [52.4, 387.0], [52.5, 387.0], [52.6, 387.0], [52.7, 387.0], [52.8, 387.0], [52.9, 389.0], [53.0, 389.0], [53.1, 390.0], [53.2, 390.0], [53.3, 390.0], [53.4, 391.0], [53.5, 391.0], [53.6, 391.0], [53.7, 391.0], [53.8, 392.0], [53.9, 392.0], [54.0, 392.0], [54.1, 392.0], [54.2, 392.0], [54.3, 393.0], [54.4, 393.0], [54.5, 393.0], [54.6, 394.0], [54.7, 394.0], [54.8, 394.0], [54.9, 394.0], [55.0, 395.0], [55.1, 396.0], [55.2, 396.0], [55.3, 397.0], [55.4, 397.0], [55.5, 398.0], [55.6, 398.0], [55.7, 398.0], [55.8, 399.0], [55.9, 399.0], [56.0, 400.0], [56.1, 400.0], [56.2, 400.0], [56.3, 401.0], [56.4, 401.0], [56.5, 401.0], [56.6, 402.0], [56.7, 402.0], [56.8, 402.0], [56.9, 402.0], [57.0, 402.0], [57.1, 402.0], [57.2, 402.0], [57.3, 403.0], [57.4, 403.0], [57.5, 403.0], [57.6, 404.0], [57.7, 404.0], [57.8, 405.0], [57.9, 405.0], [58.0, 405.0], [58.1, 406.0], [58.2, 406.0], [58.3, 407.0], [58.4, 407.0], [58.5, 408.0], [58.6, 408.0], [58.7, 408.0], [58.8, 408.0], [58.9, 409.0], [59.0, 409.0], [59.1, 409.0], [59.2, 410.0], [59.3, 410.0], [59.4, 410.0], [59.5, 410.0], [59.6, 411.0], [59.7, 411.0], [59.8, 411.0], [59.9, 411.0], [60.0, 411.0], [60.1, 412.0], [60.2, 412.0], [60.3, 412.0], [60.4, 412.0], [60.5, 412.0], [60.6, 412.0], [60.7, 412.0], [60.8, 413.0], [60.9, 413.0], [61.0, 413.0], [61.1, 413.0], [61.2, 414.0], [61.3, 414.0], [61.4, 414.0], [61.5, 414.0], [61.6, 414.0], [61.7, 414.0], [61.8, 415.0], [61.9, 416.0], [62.0, 416.0], [62.1, 416.0], [62.2, 417.0], [62.3, 417.0], [62.4, 418.0], [62.5, 418.0], [62.6, 418.0], [62.7, 419.0], [62.8, 419.0], [62.9, 419.0], [63.0, 419.0], [63.1, 420.0], [63.2, 420.0], [63.3, 421.0], [63.4, 421.0], [63.5, 421.0], [63.6, 422.0], [63.7, 422.0], [63.8, 422.0], [63.9, 422.0], [64.0, 423.0], [64.1, 424.0], [64.2, 424.0], [64.3, 424.0], [64.4, 424.0], [64.5, 424.0], [64.6, 424.0], [64.7, 424.0], [64.8, 425.0], [64.9, 425.0], [65.0, 425.0], [65.1, 425.0], [65.2, 425.0], [65.3, 425.0], [65.4, 426.0], [65.5, 426.0], [65.6, 426.0], [65.7, 427.0], [65.8, 427.0], [65.9, 427.0], [66.0, 427.0], [66.1, 427.0], [66.2, 428.0], [66.3, 428.0], [66.4, 429.0], [66.5, 429.0], [66.6, 429.0], [66.7, 430.0], [66.8, 430.0], [66.9, 430.0], [67.0, 430.0], [67.1, 430.0], [67.2, 431.0], [67.3, 431.0], [67.4, 431.0], [67.5, 432.0], [67.6, 432.0], [67.7, 433.0], [67.8, 433.0], [67.9, 433.0], [68.0, 433.0], [68.1, 434.0], [68.2, 434.0], [68.3, 434.0], [68.4, 434.0], [68.5, 435.0], [68.6, 435.0], [68.7, 435.0], [68.8, 435.0], [68.9, 436.0], [69.0, 436.0], [69.1, 437.0], [69.2, 437.0], [69.3, 437.0], [69.4, 438.0], [69.5, 438.0], [69.6, 438.0], [69.7, 438.0], [69.8, 439.0], [69.9, 439.0], [70.0, 439.0], [70.1, 439.0], [70.2, 439.0], [70.3, 440.0], [70.4, 440.0], [70.5, 441.0], [70.6, 441.0], [70.7, 442.0], [70.8, 443.0], [70.9, 443.0], [71.0, 443.0], [71.1, 443.0], [71.2, 444.0], [71.3, 444.0], [71.4, 445.0], [71.5, 446.0], [71.6, 446.0], [71.7, 446.0], [71.8, 446.0], [71.9, 447.0], [72.0, 447.0], [72.1, 447.0], [72.2, 447.0], [72.3, 447.0], [72.4, 448.0], [72.5, 448.0], [72.6, 448.0], [72.7, 448.0], [72.8, 448.0], [72.9, 448.0], [73.0, 448.0], [73.1, 448.0], [73.2, 449.0], [73.3, 449.0], [73.4, 449.0], [73.5, 449.0], [73.6, 450.0], [73.7, 450.0], [73.8, 450.0], [73.9, 450.0], [74.0, 450.0], [74.1, 450.0], [74.2, 451.0], [74.3, 451.0], [74.4, 452.0], [74.5, 452.0], [74.6, 452.0], [74.7, 452.0], [74.8, 453.0], [74.9, 453.0], [75.0, 453.0], [75.1, 454.0], [75.2, 454.0], [75.3, 454.0], [75.4, 455.0], [75.5, 455.0], [75.6, 455.0], [75.7, 455.0], [75.8, 455.0], [75.9, 456.0], [76.0, 456.0], [76.1, 456.0], [76.2, 456.0], [76.3, 456.0], [76.4, 457.0], [76.5, 457.0], [76.6, 458.0], [76.7, 458.0], [76.8, 458.0], [76.9, 458.0], [77.0, 458.0], [77.1, 458.0], [77.2, 459.0], [77.3, 460.0], [77.4, 460.0], [77.5, 460.0], [77.6, 460.0], [77.7, 460.0], [77.8, 460.0], [77.9, 460.0], [78.0, 461.0], [78.1, 461.0], [78.2, 462.0], [78.3, 462.0], [78.4, 462.0], [78.5, 462.0], [78.6, 463.0], [78.7, 463.0], [78.8, 463.0], [78.9, 464.0], [79.0, 464.0], [79.1, 464.0], [79.2, 465.0], [79.3, 466.0], [79.4, 466.0], [79.5, 466.0], [79.6, 466.0], [79.7, 466.0], [79.8, 467.0], [79.9, 467.0], [80.0, 468.0], [80.1, 468.0], [80.2, 468.0], [80.3, 468.0], [80.4, 468.0], [80.5, 469.0], [80.6, 469.0], [80.7, 470.0], [80.8, 470.0], [80.9, 470.0], [81.0, 471.0], [81.1, 471.0], [81.2, 471.0], [81.3, 471.0], [81.4, 471.0], [81.5, 472.0], [81.6, 472.0], [81.7, 473.0], [81.8, 473.0], [81.9, 473.0], [82.0, 474.0], [82.1, 474.0], [82.2, 474.0], [82.3, 474.0], [82.4, 475.0], [82.5, 475.0], [82.6, 475.0], [82.7, 475.0], [82.8, 475.0], [82.9, 475.0], [83.0, 476.0], [83.1, 476.0], [83.2, 476.0], [83.3, 477.0], [83.4, 477.0], [83.5, 478.0], [83.6, 478.0], [83.7, 478.0], [83.8, 478.0], [83.9, 478.0], [84.0, 479.0], [84.1, 479.0], [84.2, 480.0], [84.3, 480.0], [84.4, 481.0], [84.5, 481.0], [84.6, 481.0], [84.7, 482.0], [84.8, 482.0], [84.9, 482.0], [85.0, 482.0], [85.1, 483.0], [85.2, 483.0], [85.3, 484.0], [85.4, 484.0], [85.5, 484.0], [85.6, 485.0], [85.7, 485.0], [85.8, 485.0], [85.9, 485.0], [86.0, 485.0], [86.1, 485.0], [86.2, 485.0], [86.3, 486.0], [86.4, 486.0], [86.5, 486.0], [86.6, 486.0], [86.7, 487.0], [86.8, 487.0], [86.9, 487.0], [87.0, 487.0], [87.1, 487.0], [87.2, 488.0], [87.3, 488.0], [87.4, 488.0], [87.5, 488.0], [87.6, 489.0], [87.7, 489.0], [87.8, 489.0], [87.9, 490.0], [88.0, 490.0], [88.1, 490.0], [88.2, 491.0], [88.3, 491.0], [88.4, 491.0], [88.5, 492.0], [88.6, 492.0], [88.7, 492.0], [88.8, 493.0], [88.9, 494.0], [89.0, 494.0], [89.1, 494.0], [89.2, 494.0], [89.3, 495.0], [89.4, 495.0], [89.5, 495.0], [89.6, 496.0], [89.7, 496.0], [89.8, 496.0], [89.9, 497.0], [90.0, 497.0], [90.1, 497.0], [90.2, 497.0], [90.3, 497.0], [90.4, 497.0], [90.5, 498.0], [90.6, 498.0], [90.7, 498.0], [90.8, 499.0], [90.9, 499.0], [91.0, 499.0], [91.1, 500.0], [91.2, 500.0], [91.3, 500.0], [91.4, 500.0], [91.5, 501.0], [91.6, 501.0], [91.7, 501.0], [91.8, 501.0], [91.9, 502.0], [92.0, 502.0], [92.1, 502.0], [92.2, 502.0], [92.3, 503.0], [92.4, 503.0], [92.5, 503.0], [92.6, 503.0], [92.7, 504.0], [92.8, 504.0], [92.9, 504.0], [93.0, 505.0], [93.1, 505.0], [93.2, 506.0], [93.3, 506.0], [93.4, 507.0], [93.5, 507.0], [93.6, 507.0], [93.7, 508.0], [93.8, 508.0], [93.9, 508.0], [94.0, 508.0], [94.1, 508.0], [94.2, 508.0], [94.3, 508.0], [94.4, 509.0], [94.5, 509.0], [94.6, 509.0], [94.7, 510.0], [94.8, 510.0], [94.9, 510.0], [95.0, 510.0], [95.1, 511.0], [95.2, 511.0], [95.3, 512.0], [95.4, 512.0], [95.5, 512.0], [95.6, 513.0], [95.7, 513.0], [95.8, 513.0], [95.9, 513.0], [96.0, 514.0], [96.1, 514.0], [96.2, 515.0], [96.3, 515.0], [96.4, 516.0], [96.5, 516.0], [96.6, 516.0], [96.7, 516.0], [96.8, 517.0], [96.9, 518.0], [97.0, 518.0], [97.1, 518.0], [97.2, 519.0], [97.3, 519.0], [97.4, 519.0], [97.5, 520.0], [97.6, 520.0], [97.7, 520.0], [97.8, 521.0], [97.9, 521.0], [98.0, 521.0], [98.1, 521.0], [98.2, 521.0], [98.3, 522.0], [98.4, 522.0], [98.5, 522.0], [98.6, 522.0], [98.7, 522.0], [98.8, 522.0], [98.9, 522.0], [99.0, 523.0], [99.1, 523.0], [99.2, 524.0], [99.3, 525.0], [99.4, 525.0], [99.5, 527.0], [99.6, 527.0], [99.7, 645.0], [99.8, 665.0], [99.9, 819.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 549.0, "series": [{"data": [[600.0, 2.0], [300.0, 527.0], [1200.0, 1.0], [700.0, 1.0], [400.0, 549.0], [200.0, 351.0], [800.0, 1.0], [500.0, 136.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 134.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1434.0, "series": [{"data": [[0.0, 1434.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 134.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.621848739495796, "minX": 1.74320418E12, "maxY": 9.997239475500336, "series": [{"data": [[1.74320424E12, 9.621848739495796], [1.74320418E12, 9.997239475500336]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320424E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 256.0, "minX": 1.0, "maxY": 518.0, "series": [{"data": [[8.0, 518.0], [4.0, 513.0], [2.0, 434.0], [1.0, 488.0], [9.0, 495.3333333333333], [10.0, 380.14203084832883], [5.0, 508.0], [6.0, 312.0], [3.0, 449.0], [7.0, 256.0]], "isOverall": false, "label": "Google", "isController": false}, {"data": [[9.968749999999988, 380.7289540816328]], "isOverall": false, "label": "Google-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 222.13333333333333, "minX": 1.74320418E12, "maxY": 21179.55, "series": [{"data": [[1.74320424E12, 1739.3833333333334], [1.74320418E12, 21179.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74320424E12, 222.13333333333333], [1.74320418E12, 2704.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320424E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 374.8487394957984, "minX": 1.74320418E12, "maxY": 381.2118702553488, "series": [{"data": [[1.74320424E12, 374.8487394957984], [1.74320418E12, 381.2118702553488]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320424E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 373.84033613445376, "minX": 1.74320418E12, "maxY": 380.0772946859908, "series": [{"data": [[1.74320424E12, 373.84033613445376], [1.74320418E12, 380.0772946859908]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320424E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 16.420168067226903, "minX": 1.74320418E12, "maxY": 18.12629399585921, "series": [{"data": [[1.74320424E12, 16.420168067226903], [1.74320418E12, 18.12629399585921]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320424E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 222.0, "minX": 1.74320418E12, "maxY": 1289.0, "series": [{"data": [[1.74320424E12, 525.0], [1.74320418E12, 1289.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74320424E12, 485.0], [1.74320418E12, 497.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74320424E12, 524.0], [1.74320418E12, 523.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74320424E12, 501.0], [1.74320418E12, 511.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74320424E12, 232.0], [1.74320418E12, 222.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74320424E12, 383.0], [1.74320418E12, 379.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320424E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 357.5, "minX": 3.0, "maxY": 665.0, "series": [{"data": [[22.0, 421.5], [11.0, 397.0], [23.0, 393.0], [3.0, 665.0], [24.0, 412.5], [25.0, 363.0], [26.0, 382.5], [27.0, 380.0], [28.0, 375.5], [29.0, 357.5], [30.0, 359.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 355.5, "minX": 3.0, "maxY": 659.0, "series": [{"data": [[22.0, 420.0], [11.0, 397.0], [23.0, 393.0], [3.0, 659.0], [24.0, 410.0], [25.0, 361.5], [26.0, 380.5], [27.0, 379.0], [28.0, 375.0], [29.0, 355.5], [30.0, 357.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8166666666666667, "minX": 1.74320418E12, "maxY": 24.316666666666666, "series": [{"data": [[1.74320424E12, 1.8166666666666667], [1.74320418E12, 24.316666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320424E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.74320418E12, "maxY": 24.15, "series": [{"data": [[1.74320424E12, 1.9833333333333334], [1.74320418E12, 24.15]], "isOverall": false, "label": "302", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320424E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.74320418E12, "maxY": 24.15, "series": [{"data": [[1.74320424E12, 1.9833333333333334], [1.74320418E12, 24.15]], "isOverall": false, "label": "Google-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320424E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.74320418E12, "maxY": 24.15, "series": [{"data": [[1.74320424E12, 1.9833333333333334], [1.74320418E12, 24.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320424E12, "title": "Total Transactions Per Second"}},
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

