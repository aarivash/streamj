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
        data: {"result": {"minY": 225.0, "minX": 0.0, "maxY": 130794.0, "series": [{"data": [[0.0, 225.0], [0.1, 227.0], [0.2, 227.0], [0.3, 228.0], [0.4, 229.0], [0.5, 229.0], [0.6, 230.0], [0.7, 230.0], [0.8, 230.0], [0.9, 230.0], [1.0, 231.0], [1.1, 231.0], [1.2, 231.0], [1.3, 231.0], [1.4, 231.0], [1.5, 231.0], [1.6, 232.0], [1.7, 233.0], [1.8, 233.0], [1.9, 233.0], [2.0, 234.0], [2.1, 234.0], [2.2, 235.0], [2.3, 235.0], [2.4, 235.0], [2.5, 236.0], [2.6, 236.0], [2.7, 236.0], [2.8, 237.0], [2.9, 237.0], [3.0, 237.0], [3.1, 238.0], [3.2, 238.0], [3.3, 239.0], [3.4, 239.0], [3.5, 239.0], [3.6, 240.0], [3.7, 240.0], [3.8, 241.0], [3.9, 241.0], [4.0, 241.0], [4.1, 241.0], [4.2, 242.0], [4.3, 242.0], [4.4, 242.0], [4.5, 242.0], [4.6, 242.0], [4.7, 242.0], [4.8, 243.0], [4.9, 243.0], [5.0, 244.0], [5.1, 244.0], [5.2, 244.0], [5.3, 244.0], [5.4, 244.0], [5.5, 245.0], [5.6, 245.0], [5.7, 245.0], [5.8, 247.0], [5.9, 247.0], [6.0, 247.0], [6.1, 248.0], [6.2, 248.0], [6.3, 248.0], [6.4, 249.0], [6.5, 249.0], [6.6, 250.0], [6.7, 250.0], [6.8, 251.0], [6.9, 251.0], [7.0, 251.0], [7.1, 252.0], [7.2, 252.0], [7.3, 252.0], [7.4, 252.0], [7.5, 253.0], [7.6, 253.0], [7.7, 253.0], [7.8, 254.0], [7.9, 254.0], [8.0, 254.0], [8.1, 254.0], [8.2, 255.0], [8.3, 255.0], [8.4, 255.0], [8.5, 256.0], [8.6, 256.0], [8.7, 256.0], [8.8, 257.0], [8.9, 257.0], [9.0, 258.0], [9.1, 258.0], [9.2, 258.0], [9.3, 259.0], [9.4, 259.0], [9.5, 259.0], [9.6, 260.0], [9.7, 260.0], [9.8, 261.0], [9.9, 261.0], [10.0, 262.0], [10.1, 262.0], [10.2, 262.0], [10.3, 263.0], [10.4, 263.0], [10.5, 264.0], [10.6, 264.0], [10.7, 265.0], [10.8, 265.0], [10.9, 266.0], [11.0, 266.0], [11.1, 266.0], [11.2, 267.0], [11.3, 267.0], [11.4, 267.0], [11.5, 268.0], [11.6, 268.0], [11.7, 268.0], [11.8, 269.0], [11.9, 269.0], [12.0, 269.0], [12.1, 269.0], [12.2, 270.0], [12.3, 270.0], [12.4, 270.0], [12.5, 270.0], [12.6, 270.0], [12.7, 271.0], [12.8, 271.0], [12.9, 271.0], [13.0, 271.0], [13.1, 271.0], [13.2, 271.0], [13.3, 271.0], [13.4, 272.0], [13.5, 273.0], [13.6, 273.0], [13.7, 273.0], [13.8, 273.0], [13.9, 273.0], [14.0, 273.0], [14.1, 273.0], [14.2, 274.0], [14.3, 274.0], [14.4, 274.0], [14.5, 274.0], [14.6, 275.0], [14.7, 275.0], [14.8, 275.0], [14.9, 275.0], [15.0, 275.0], [15.1, 276.0], [15.2, 276.0], [15.3, 276.0], [15.4, 276.0], [15.5, 277.0], [15.6, 277.0], [15.7, 277.0], [15.8, 277.0], [15.9, 277.0], [16.0, 278.0], [16.1, 278.0], [16.2, 278.0], [16.3, 279.0], [16.4, 279.0], [16.5, 280.0], [16.6, 280.0], [16.7, 280.0], [16.8, 281.0], [16.9, 281.0], [17.0, 282.0], [17.1, 282.0], [17.2, 283.0], [17.3, 283.0], [17.4, 283.0], [17.5, 284.0], [17.6, 284.0], [17.7, 284.0], [17.8, 284.0], [17.9, 285.0], [18.0, 286.0], [18.1, 286.0], [18.2, 286.0], [18.3, 286.0], [18.4, 287.0], [18.5, 287.0], [18.6, 288.0], [18.7, 288.0], [18.8, 288.0], [18.9, 289.0], [19.0, 289.0], [19.1, 289.0], [19.2, 289.0], [19.3, 289.0], [19.4, 290.0], [19.5, 290.0], [19.6, 290.0], [19.7, 291.0], [19.8, 291.0], [19.9, 292.0], [20.0, 292.0], [20.1, 293.0], [20.2, 293.0], [20.3, 293.0], [20.4, 294.0], [20.5, 294.0], [20.6, 294.0], [20.7, 294.0], [20.8, 295.0], [20.9, 295.0], [21.0, 295.0], [21.1, 295.0], [21.2, 296.0], [21.3, 296.0], [21.4, 296.0], [21.5, 297.0], [21.6, 297.0], [21.7, 297.0], [21.8, 297.0], [21.9, 297.0], [22.0, 297.0], [22.1, 299.0], [22.2, 299.0], [22.3, 299.0], [22.4, 299.0], [22.5, 299.0], [22.6, 300.0], [22.7, 300.0], [22.8, 300.0], [22.9, 300.0], [23.0, 302.0], [23.1, 302.0], [23.2, 302.0], [23.3, 303.0], [23.4, 303.0], [23.5, 303.0], [23.6, 303.0], [23.7, 304.0], [23.8, 304.0], [23.9, 304.0], [24.0, 304.0], [24.1, 305.0], [24.2, 305.0], [24.3, 305.0], [24.4, 305.0], [24.5, 306.0], [24.6, 306.0], [24.7, 306.0], [24.8, 307.0], [24.9, 307.0], [25.0, 307.0], [25.1, 307.0], [25.2, 308.0], [25.3, 308.0], [25.4, 308.0], [25.5, 309.0], [25.6, 309.0], [25.7, 310.0], [25.8, 310.0], [25.9, 310.0], [26.0, 311.0], [26.1, 311.0], [26.2, 312.0], [26.3, 312.0], [26.4, 312.0], [26.5, 312.0], [26.6, 312.0], [26.7, 312.0], [26.8, 313.0], [26.9, 313.0], [27.0, 313.0], [27.1, 313.0], [27.2, 313.0], [27.3, 314.0], [27.4, 315.0], [27.5, 315.0], [27.6, 315.0], [27.7, 315.0], [27.8, 316.0], [27.9, 316.0], [28.0, 316.0], [28.1, 317.0], [28.2, 317.0], [28.3, 317.0], [28.4, 317.0], [28.5, 317.0], [28.6, 317.0], [28.7, 318.0], [28.8, 318.0], [28.9, 318.0], [29.0, 318.0], [29.1, 318.0], [29.2, 319.0], [29.3, 320.0], [29.4, 320.0], [29.5, 320.0], [29.6, 321.0], [29.7, 321.0], [29.8, 321.0], [29.9, 321.0], [30.0, 322.0], [30.1, 322.0], [30.2, 322.0], [30.3, 323.0], [30.4, 323.0], [30.5, 323.0], [30.6, 324.0], [30.7, 324.0], [30.8, 325.0], [30.9, 325.0], [31.0, 325.0], [31.1, 325.0], [31.2, 325.0], [31.3, 326.0], [31.4, 326.0], [31.5, 326.0], [31.6, 326.0], [31.7, 326.0], [31.8, 327.0], [31.9, 327.0], [32.0, 327.0], [32.1, 327.0], [32.2, 327.0], [32.3, 327.0], [32.4, 327.0], [32.5, 328.0], [32.6, 329.0], [32.7, 330.0], [32.8, 330.0], [32.9, 330.0], [33.0, 330.0], [33.1, 331.0], [33.2, 332.0], [33.3, 332.0], [33.4, 332.0], [33.5, 332.0], [33.6, 332.0], [33.7, 333.0], [33.8, 333.0], [33.9, 333.0], [34.0, 333.0], [34.1, 333.0], [34.2, 334.0], [34.3, 334.0], [34.4, 334.0], [34.5, 334.0], [34.6, 335.0], [34.7, 336.0], [34.8, 337.0], [34.9, 338.0], [35.0, 338.0], [35.1, 338.0], [35.2, 339.0], [35.3, 339.0], [35.4, 339.0], [35.5, 339.0], [35.6, 339.0], [35.7, 340.0], [35.8, 340.0], [35.9, 340.0], [36.0, 340.0], [36.1, 341.0], [36.2, 341.0], [36.3, 341.0], [36.4, 341.0], [36.5, 341.0], [36.6, 342.0], [36.7, 342.0], [36.8, 342.0], [36.9, 343.0], [37.0, 344.0], [37.1, 344.0], [37.2, 344.0], [37.3, 344.0], [37.4, 344.0], [37.5, 345.0], [37.6, 345.0], [37.7, 345.0], [37.8, 346.0], [37.9, 346.0], [38.0, 347.0], [38.1, 347.0], [38.2, 347.0], [38.3, 347.0], [38.4, 348.0], [38.5, 348.0], [38.6, 348.0], [38.7, 348.0], [38.8, 349.0], [38.9, 349.0], [39.0, 350.0], [39.1, 350.0], [39.2, 350.0], [39.3, 350.0], [39.4, 351.0], [39.5, 351.0], [39.6, 351.0], [39.7, 351.0], [39.8, 352.0], [39.9, 352.0], [40.0, 352.0], [40.1, 353.0], [40.2, 353.0], [40.3, 353.0], [40.4, 354.0], [40.5, 354.0], [40.6, 354.0], [40.7, 355.0], [40.8, 355.0], [40.9, 355.0], [41.0, 356.0], [41.1, 356.0], [41.2, 357.0], [41.3, 357.0], [41.4, 357.0], [41.5, 357.0], [41.6, 357.0], [41.7, 357.0], [41.8, 358.0], [41.9, 358.0], [42.0, 358.0], [42.1, 359.0], [42.2, 360.0], [42.3, 360.0], [42.4, 361.0], [42.5, 361.0], [42.6, 361.0], [42.7, 361.0], [42.8, 362.0], [42.9, 362.0], [43.0, 362.0], [43.1, 362.0], [43.2, 362.0], [43.3, 363.0], [43.4, 363.0], [43.5, 363.0], [43.6, 364.0], [43.7, 364.0], [43.8, 364.0], [43.9, 364.0], [44.0, 365.0], [44.1, 365.0], [44.2, 366.0], [44.3, 366.0], [44.4, 366.0], [44.5, 366.0], [44.6, 367.0], [44.7, 367.0], [44.8, 367.0], [44.9, 368.0], [45.0, 368.0], [45.1, 369.0], [45.2, 369.0], [45.3, 369.0], [45.4, 369.0], [45.5, 370.0], [45.6, 370.0], [45.7, 370.0], [45.8, 370.0], [45.9, 371.0], [46.0, 371.0], [46.1, 371.0], [46.2, 371.0], [46.3, 372.0], [46.4, 372.0], [46.5, 373.0], [46.6, 373.0], [46.7, 373.0], [46.8, 373.0], [46.9, 373.0], [47.0, 373.0], [47.1, 374.0], [47.2, 374.0], [47.3, 374.0], [47.4, 374.0], [47.5, 375.0], [47.6, 375.0], [47.7, 375.0], [47.8, 375.0], [47.9, 375.0], [48.0, 375.0], [48.1, 376.0], [48.2, 376.0], [48.3, 376.0], [48.4, 376.0], [48.5, 377.0], [48.6, 377.0], [48.7, 378.0], [48.8, 378.0], [48.9, 378.0], [49.0, 378.0], [49.1, 378.0], [49.2, 379.0], [49.3, 379.0], [49.4, 379.0], [49.5, 379.0], [49.6, 379.0], [49.7, 380.0], [49.8, 380.0], [49.9, 380.0], [50.0, 380.0], [50.1, 381.0], [50.2, 381.0], [50.3, 381.0], [50.4, 381.0], [50.5, 382.0], [50.6, 382.0], [50.7, 382.0], [50.8, 382.0], [50.9, 383.0], [51.0, 383.0], [51.1, 383.0], [51.2, 383.0], [51.3, 383.0], [51.4, 384.0], [51.5, 384.0], [51.6, 385.0], [51.7, 385.0], [51.8, 385.0], [51.9, 385.0], [52.0, 385.0], [52.1, 385.0], [52.2, 386.0], [52.3, 386.0], [52.4, 386.0], [52.5, 386.0], [52.6, 387.0], [52.7, 388.0], [52.8, 388.0], [52.9, 388.0], [53.0, 388.0], [53.1, 389.0], [53.2, 389.0], [53.3, 389.0], [53.4, 389.0], [53.5, 389.0], [53.6, 390.0], [53.7, 390.0], [53.8, 390.0], [53.9, 390.0], [54.0, 390.0], [54.1, 391.0], [54.2, 391.0], [54.3, 391.0], [54.4, 391.0], [54.5, 392.0], [54.6, 392.0], [54.7, 392.0], [54.8, 392.0], [54.9, 393.0], [55.0, 393.0], [55.1, 394.0], [55.2, 394.0], [55.3, 395.0], [55.4, 395.0], [55.5, 395.0], [55.6, 396.0], [55.7, 396.0], [55.8, 396.0], [55.9, 396.0], [56.0, 397.0], [56.1, 397.0], [56.2, 398.0], [56.3, 398.0], [56.4, 398.0], [56.5, 398.0], [56.6, 398.0], [56.7, 399.0], [56.8, 399.0], [56.9, 400.0], [57.0, 400.0], [57.1, 400.0], [57.2, 400.0], [57.3, 400.0], [57.4, 401.0], [57.5, 401.0], [57.6, 401.0], [57.7, 401.0], [57.8, 402.0], [57.9, 403.0], [58.0, 403.0], [58.1, 403.0], [58.2, 404.0], [58.3, 405.0], [58.4, 405.0], [58.5, 405.0], [58.6, 405.0], [58.7, 406.0], [58.8, 406.0], [58.9, 406.0], [59.0, 407.0], [59.1, 407.0], [59.2, 408.0], [59.3, 408.0], [59.4, 408.0], [59.5, 409.0], [59.6, 409.0], [59.7, 409.0], [59.8, 409.0], [59.9, 409.0], [60.0, 409.0], [60.1, 410.0], [60.2, 410.0], [60.3, 410.0], [60.4, 411.0], [60.5, 411.0], [60.6, 412.0], [60.7, 412.0], [60.8, 413.0], [60.9, 413.0], [61.0, 414.0], [61.1, 414.0], [61.2, 414.0], [61.3, 414.0], [61.4, 414.0], [61.5, 415.0], [61.6, 415.0], [61.7, 415.0], [61.8, 415.0], [61.9, 415.0], [62.0, 415.0], [62.1, 416.0], [62.2, 416.0], [62.3, 416.0], [62.4, 416.0], [62.5, 417.0], [62.6, 417.0], [62.7, 417.0], [62.8, 417.0], [62.9, 417.0], [63.0, 418.0], [63.1, 418.0], [63.2, 418.0], [63.3, 419.0], [63.4, 419.0], [63.5, 419.0], [63.6, 419.0], [63.7, 419.0], [63.8, 419.0], [63.9, 419.0], [64.0, 420.0], [64.1, 420.0], [64.2, 421.0], [64.3, 421.0], [64.4, 422.0], [64.5, 422.0], [64.6, 422.0], [64.7, 422.0], [64.8, 422.0], [64.9, 423.0], [65.0, 423.0], [65.1, 423.0], [65.2, 424.0], [65.3, 424.0], [65.4, 424.0], [65.5, 425.0], [65.6, 425.0], [65.7, 425.0], [65.8, 425.0], [65.9, 426.0], [66.0, 426.0], [66.1, 426.0], [66.2, 426.0], [66.3, 426.0], [66.4, 426.0], [66.5, 427.0], [66.6, 427.0], [66.7, 428.0], [66.8, 428.0], [66.9, 428.0], [67.0, 428.0], [67.1, 429.0], [67.2, 430.0], [67.3, 430.0], [67.4, 430.0], [67.5, 430.0], [67.6, 431.0], [67.7, 431.0], [67.8, 431.0], [67.9, 431.0], [68.0, 431.0], [68.1, 432.0], [68.2, 432.0], [68.3, 433.0], [68.4, 433.0], [68.5, 433.0], [68.6, 433.0], [68.7, 433.0], [68.8, 434.0], [68.9, 434.0], [69.0, 434.0], [69.1, 435.0], [69.2, 435.0], [69.3, 435.0], [69.4, 435.0], [69.5, 435.0], [69.6, 435.0], [69.7, 436.0], [69.8, 436.0], [69.9, 436.0], [70.0, 437.0], [70.1, 437.0], [70.2, 437.0], [70.3, 437.0], [70.4, 438.0], [70.5, 438.0], [70.6, 438.0], [70.7, 438.0], [70.8, 439.0], [70.9, 439.0], [71.0, 440.0], [71.1, 440.0], [71.2, 440.0], [71.3, 441.0], [71.4, 441.0], [71.5, 441.0], [71.6, 441.0], [71.7, 442.0], [71.8, 442.0], [71.9, 442.0], [72.0, 443.0], [72.1, 443.0], [72.2, 443.0], [72.3, 443.0], [72.4, 443.0], [72.5, 444.0], [72.6, 444.0], [72.7, 445.0], [72.8, 445.0], [72.9, 445.0], [73.0, 446.0], [73.1, 446.0], [73.2, 446.0], [73.3, 446.0], [73.4, 447.0], [73.5, 447.0], [73.6, 447.0], [73.7, 448.0], [73.8, 448.0], [73.9, 449.0], [74.0, 449.0], [74.1, 449.0], [74.2, 450.0], [74.3, 450.0], [74.4, 451.0], [74.5, 451.0], [74.6, 451.0], [74.7, 451.0], [74.8, 451.0], [74.9, 451.0], [75.0, 451.0], [75.1, 451.0], [75.2, 452.0], [75.3, 452.0], [75.4, 453.0], [75.5, 453.0], [75.6, 453.0], [75.7, 454.0], [75.8, 454.0], [75.9, 454.0], [76.0, 454.0], [76.1, 454.0], [76.2, 455.0], [76.3, 455.0], [76.4, 455.0], [76.5, 456.0], [76.6, 456.0], [76.7, 457.0], [76.8, 457.0], [76.9, 457.0], [77.0, 458.0], [77.1, 458.0], [77.2, 458.0], [77.3, 460.0], [77.4, 460.0], [77.5, 460.0], [77.6, 461.0], [77.7, 461.0], [77.8, 461.0], [77.9, 461.0], [78.0, 461.0], [78.1, 462.0], [78.2, 462.0], [78.3, 463.0], [78.4, 464.0], [78.5, 464.0], [78.6, 464.0], [78.7, 465.0], [78.8, 465.0], [78.9, 465.0], [79.0, 466.0], [79.1, 466.0], [79.2, 466.0], [79.3, 466.0], [79.4, 467.0], [79.5, 467.0], [79.6, 467.0], [79.7, 467.0], [79.8, 468.0], [79.9, 469.0], [80.0, 469.0], [80.1, 469.0], [80.2, 469.0], [80.3, 470.0], [80.4, 470.0], [80.5, 470.0], [80.6, 470.0], [80.7, 470.0], [80.8, 470.0], [80.9, 471.0], [81.0, 471.0], [81.1, 472.0], [81.2, 472.0], [81.3, 472.0], [81.4, 473.0], [81.5, 473.0], [81.6, 473.0], [81.7, 473.0], [81.8, 474.0], [81.9, 475.0], [82.0, 475.0], [82.1, 476.0], [82.2, 476.0], [82.3, 476.0], [82.4, 477.0], [82.5, 477.0], [82.6, 477.0], [82.7, 477.0], [82.8, 477.0], [82.9, 478.0], [83.0, 478.0], [83.1, 478.0], [83.2, 478.0], [83.3, 479.0], [83.4, 479.0], [83.5, 479.0], [83.6, 479.0], [83.7, 479.0], [83.8, 480.0], [83.9, 480.0], [84.0, 480.0], [84.1, 480.0], [84.2, 480.0], [84.3, 481.0], [84.4, 481.0], [84.5, 481.0], [84.6, 482.0], [84.7, 483.0], [84.8, 483.0], [84.9, 483.0], [85.0, 483.0], [85.1, 483.0], [85.2, 484.0], [85.3, 485.0], [85.4, 485.0], [85.5, 485.0], [85.6, 485.0], [85.7, 486.0], [85.8, 486.0], [85.9, 486.0], [86.0, 486.0], [86.1, 487.0], [86.2, 487.0], [86.3, 487.0], [86.4, 488.0], [86.5, 488.0], [86.6, 488.0], [86.7, 488.0], [86.8, 488.0], [86.9, 488.0], [87.0, 489.0], [87.1, 489.0], [87.2, 489.0], [87.3, 490.0], [87.4, 490.0], [87.5, 490.0], [87.6, 490.0], [87.7, 490.0], [87.8, 490.0], [87.9, 490.0], [88.0, 490.0], [88.1, 491.0], [88.2, 491.0], [88.3, 492.0], [88.4, 492.0], [88.5, 492.0], [88.6, 492.0], [88.7, 493.0], [88.8, 493.0], [88.9, 493.0], [89.0, 493.0], [89.1, 493.0], [89.2, 494.0], [89.3, 495.0], [89.4, 495.0], [89.5, 495.0], [89.6, 496.0], [89.7, 497.0], [89.8, 497.0], [89.9, 498.0], [90.0, 498.0], [90.1, 499.0], [90.2, 499.0], [90.3, 499.0], [90.4, 499.0], [90.5, 499.0], [90.6, 500.0], [90.7, 500.0], [90.8, 501.0], [90.9, 501.0], [91.0, 501.0], [91.1, 502.0], [91.2, 502.0], [91.3, 502.0], [91.4, 502.0], [91.5, 502.0], [91.6, 503.0], [91.7, 503.0], [91.8, 503.0], [91.9, 503.0], [92.0, 503.0], [92.1, 503.0], [92.2, 503.0], [92.3, 504.0], [92.4, 505.0], [92.5, 505.0], [92.6, 506.0], [92.7, 506.0], [92.8, 506.0], [92.9, 506.0], [93.0, 506.0], [93.1, 506.0], [93.2, 507.0], [93.3, 507.0], [93.4, 507.0], [93.5, 507.0], [93.6, 508.0], [93.7, 508.0], [93.8, 509.0], [93.9, 509.0], [94.0, 509.0], [94.1, 509.0], [94.2, 509.0], [94.3, 509.0], [94.4, 509.0], [94.5, 510.0], [94.6, 510.0], [94.7, 510.0], [94.8, 510.0], [94.9, 511.0], [95.0, 511.0], [95.1, 511.0], [95.2, 512.0], [95.3, 512.0], [95.4, 512.0], [95.5, 513.0], [95.6, 513.0], [95.7, 513.0], [95.8, 515.0], [95.9, 515.0], [96.0, 515.0], [96.1, 515.0], [96.2, 516.0], [96.3, 516.0], [96.4, 516.0], [96.5, 516.0], [96.6, 517.0], [96.7, 518.0], [96.8, 518.0], [96.9, 518.0], [97.0, 518.0], [97.1, 518.0], [97.2, 518.0], [97.3, 519.0], [97.4, 519.0], [97.5, 519.0], [97.6, 520.0], [97.7, 520.0], [97.8, 521.0], [97.9, 521.0], [98.0, 522.0], [98.1, 522.0], [98.2, 523.0], [98.3, 523.0], [98.4, 523.0], [98.5, 523.0], [98.6, 524.0], [98.7, 524.0], [98.8, 524.0], [98.9, 525.0], [99.0, 525.0], [99.1, 526.0], [99.2, 527.0], [99.3, 528.0], [99.4, 533.0], [99.5, 552.0], [99.6, 823.0], [99.7, 839.0], [99.8, 900.0], [99.9, 130583.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 485.0, "series": [{"data": [[300.0, 485.0], [600.0, 1.0], [800.0, 3.0], [400.0, 476.0], [200.0, 318.0], [900.0, 1.0], [500.0, 127.0], [130500.0, 1.0], [130700.0, 1.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 130700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1283.0, "series": [{"data": [[0.0, 1283.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 128.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.7432658E12, "maxY": 10.0, "series": [{"data": [[1.74326598E12, 1.5], [1.7432658E12, 10.0], [1.74326586E12, 9.95692307692308]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74326598E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 274.0, "minX": 1.0, "maxY": 130794.0, "series": [{"data": [[8.0, 432.0], [4.0, 441.0], [2.0, 130583.0], [1.0, 130794.0], [9.0, 274.0], [10.0, 380.23504273504216], [5.0, 447.0], [6.0, 447.0], [3.0, 518.0], [7.0, 512.0]], "isOverall": false, "label": "Google", "isController": false}, {"data": [[9.968152866242036, 564.9667374380743]], "isOverall": false, "label": "Google-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3.7333333333333334, "minX": 1.7432658E12, "maxY": 11123.283333333333, "series": [{"data": [[1.74326598E12, 29.233333333333334], [1.7432658E12, 11123.283333333333], [1.74326586E12, 9500.833333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74326598E12, 3.7333333333333334], [1.7432658E12, 1420.5333333333333], [1.74326586E12, 1213.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74326598E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 378.5230769230771, "minX": 1.7432658E12, "maxY": 130688.5, "series": [{"data": [[1.74326598E12, 130688.5], [1.7432658E12, 382.2352168199735], [1.74326586E12, 378.5230769230771]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74326598E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 377.33846153846116, "minX": 1.7432658E12, "maxY": 130686.0, "series": [{"data": [[1.74326598E12, 130686.0], [1.7432658E12, 381.0840998685942], [1.74326586E12, 377.33846153846116]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74326598E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 16.32769230769228, "minX": 1.7432658E12, "maxY": 130354.5, "series": [{"data": [[1.74326598E12, 130354.5], [1.7432658E12, 19.3298291721419], [1.74326586E12, 16.32769230769228]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74326598E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 225.0, "minX": 1.7432658E12, "maxY": 130794.0, "series": [{"data": [[1.74326598E12, 130794.0], [1.7432658E12, 900.0], [1.74326586E12, 533.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74326598E12, 130794.0], [1.7432658E12, 493.0], [1.74326586E12, 501.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74326598E12, 130794.0], [1.7432658E12, 526.38], [1.74326586E12, 524.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74326598E12, 130794.0], [1.7432658E12, 510.9], [1.74326586E12, 511.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74326598E12, 130583.0], [1.7432658E12, 227.0], [1.74326586E12, 225.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74326598E12, 130688.5], [1.7432658E12, 383.0], [1.74326586E12, 376.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74326598E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 351.0, "minX": 2.0, "maxY": 130688.5, "series": [{"data": [[2.0, 130688.5], [11.0, 446.0], [18.0, 391.5], [19.0, 406.0], [20.0, 397.5], [21.0, 366.0], [22.0, 386.5], [23.0, 381.0], [24.0, 405.5], [25.0, 351.0], [26.0, 385.0], [27.0, 369.0], [28.0, 390.5], [29.0, 353.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 350.0, "minX": 2.0, "maxY": 130686.0, "series": [{"data": [[2.0, 130686.0], [11.0, 444.0], [18.0, 390.5], [19.0, 405.0], [20.0, 397.0], [21.0, 365.0], [22.0, 385.0], [23.0, 380.0], [24.0, 404.0], [25.0, 350.0], [26.0, 383.5], [27.0, 368.0], [28.0, 390.5], [29.0, 352.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.7, "minX": 1.7432658E12, "maxY": 12.85, "series": [{"data": [[1.7432658E12, 12.85], [1.74326586E12, 10.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74326586E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7432658E12, "maxY": 12.683333333333334, "series": [{"data": [[1.74326598E12, 0.03333333333333333], [1.7432658E12, 12.683333333333334], [1.74326586E12, 10.833333333333334]], "isOverall": false, "label": "302", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74326598E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7432658E12, "maxY": 12.683333333333334, "series": [{"data": [[1.74326598E12, 0.03333333333333333], [1.7432658E12, 12.683333333333334], [1.74326586E12, 10.833333333333334]], "isOverall": false, "label": "Google-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74326598E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7432658E12, "maxY": 12.683333333333334, "series": [{"data": [[1.74326598E12, 0.03333333333333333], [1.7432658E12, 12.683333333333334], [1.74326586E12, 10.833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74326598E12, "title": "Total Transactions Per Second"}},
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

