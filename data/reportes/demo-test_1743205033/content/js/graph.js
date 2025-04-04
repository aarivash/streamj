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
        data: {"result": {"minY": 224.0, "minX": 0.0, "maxY": 915.0, "series": [{"data": [[0.0, 224.0], [0.1, 225.0], [0.2, 226.0], [0.3, 226.0], [0.4, 227.0], [0.5, 227.0], [0.6, 228.0], [0.7, 228.0], [0.8, 228.0], [0.9, 229.0], [1.0, 229.0], [1.1, 230.0], [1.2, 230.0], [1.3, 230.0], [1.4, 230.0], [1.5, 230.0], [1.6, 230.0], [1.7, 230.0], [1.8, 231.0], [1.9, 231.0], [2.0, 232.0], [2.1, 232.0], [2.2, 232.0], [2.3, 233.0], [2.4, 233.0], [2.5, 233.0], [2.6, 233.0], [2.7, 233.0], [2.8, 234.0], [2.9, 234.0], [3.0, 234.0], [3.1, 234.0], [3.2, 235.0], [3.3, 236.0], [3.4, 236.0], [3.5, 236.0], [3.6, 236.0], [3.7, 236.0], [3.8, 237.0], [3.9, 237.0], [4.0, 237.0], [4.1, 237.0], [4.2, 238.0], [4.3, 238.0], [4.4, 238.0], [4.5, 238.0], [4.6, 239.0], [4.7, 240.0], [4.8, 240.0], [4.9, 241.0], [5.0, 241.0], [5.1, 242.0], [5.2, 242.0], [5.3, 242.0], [5.4, 242.0], [5.5, 242.0], [5.6, 243.0], [5.7, 243.0], [5.8, 243.0], [5.9, 243.0], [6.0, 244.0], [6.1, 244.0], [6.2, 244.0], [6.3, 244.0], [6.4, 244.0], [6.5, 244.0], [6.6, 245.0], [6.7, 246.0], [6.8, 246.0], [6.9, 246.0], [7.0, 247.0], [7.1, 247.0], [7.2, 248.0], [7.3, 248.0], [7.4, 248.0], [7.5, 248.0], [7.6, 249.0], [7.7, 249.0], [7.8, 250.0], [7.9, 250.0], [8.0, 251.0], [8.1, 251.0], [8.2, 251.0], [8.3, 251.0], [8.4, 251.0], [8.5, 252.0], [8.6, 253.0], [8.7, 253.0], [8.8, 253.0], [8.9, 254.0], [9.0, 254.0], [9.1, 254.0], [9.2, 254.0], [9.3, 255.0], [9.4, 256.0], [9.5, 256.0], [9.6, 257.0], [9.7, 257.0], [9.8, 257.0], [9.9, 258.0], [10.0, 258.0], [10.1, 258.0], [10.2, 258.0], [10.3, 259.0], [10.4, 259.0], [10.5, 259.0], [10.6, 260.0], [10.7, 260.0], [10.8, 260.0], [10.9, 261.0], [11.0, 261.0], [11.1, 261.0], [11.2, 262.0], [11.3, 262.0], [11.4, 262.0], [11.5, 263.0], [11.6, 263.0], [11.7, 263.0], [11.8, 264.0], [11.9, 264.0], [12.0, 265.0], [12.1, 265.0], [12.2, 265.0], [12.3, 265.0], [12.4, 265.0], [12.5, 265.0], [12.6, 266.0], [12.7, 266.0], [12.8, 266.0], [12.9, 267.0], [13.0, 267.0], [13.1, 267.0], [13.2, 268.0], [13.3, 268.0], [13.4, 268.0], [13.5, 268.0], [13.6, 269.0], [13.7, 269.0], [13.8, 269.0], [13.9, 270.0], [14.0, 270.0], [14.1, 270.0], [14.2, 270.0], [14.3, 270.0], [14.4, 271.0], [14.5, 271.0], [14.6, 271.0], [14.7, 271.0], [14.8, 271.0], [14.9, 271.0], [15.0, 272.0], [15.1, 273.0], [15.2, 274.0], [15.3, 275.0], [15.4, 275.0], [15.5, 276.0], [15.6, 276.0], [15.7, 277.0], [15.8, 277.0], [15.9, 277.0], [16.0, 278.0], [16.1, 278.0], [16.2, 279.0], [16.3, 279.0], [16.4, 279.0], [16.5, 279.0], [16.6, 279.0], [16.7, 280.0], [16.8, 280.0], [16.9, 280.0], [17.0, 280.0], [17.1, 280.0], [17.2, 280.0], [17.3, 280.0], [17.4, 281.0], [17.5, 281.0], [17.6, 282.0], [17.7, 282.0], [17.8, 283.0], [17.9, 283.0], [18.0, 284.0], [18.1, 285.0], [18.2, 285.0], [18.3, 285.0], [18.4, 285.0], [18.5, 286.0], [18.6, 286.0], [18.7, 287.0], [18.8, 287.0], [18.9, 287.0], [19.0, 287.0], [19.1, 288.0], [19.2, 288.0], [19.3, 288.0], [19.4, 289.0], [19.5, 289.0], [19.6, 289.0], [19.7, 289.0], [19.8, 290.0], [19.9, 290.0], [20.0, 290.0], [20.1, 290.0], [20.2, 291.0], [20.3, 291.0], [20.4, 292.0], [20.5, 292.0], [20.6, 292.0], [20.7, 292.0], [20.8, 292.0], [20.9, 293.0], [21.0, 293.0], [21.1, 293.0], [21.2, 293.0], [21.3, 294.0], [21.4, 294.0], [21.5, 294.0], [21.6, 294.0], [21.7, 295.0], [21.8, 295.0], [21.9, 295.0], [22.0, 295.0], [22.1, 295.0], [22.2, 295.0], [22.3, 296.0], [22.4, 296.0], [22.5, 296.0], [22.6, 297.0], [22.7, 297.0], [22.8, 297.0], [22.9, 297.0], [23.0, 298.0], [23.1, 299.0], [23.2, 299.0], [23.3, 299.0], [23.4, 299.0], [23.5, 299.0], [23.6, 299.0], [23.7, 300.0], [23.8, 300.0], [23.9, 300.0], [24.0, 301.0], [24.1, 301.0], [24.2, 301.0], [24.3, 301.0], [24.4, 302.0], [24.5, 302.0], [24.6, 302.0], [24.7, 302.0], [24.8, 302.0], [24.9, 303.0], [25.0, 303.0], [25.1, 303.0], [25.2, 303.0], [25.3, 303.0], [25.4, 304.0], [25.5, 304.0], [25.6, 305.0], [25.7, 305.0], [25.8, 305.0], [25.9, 305.0], [26.0, 305.0], [26.1, 306.0], [26.2, 306.0], [26.3, 307.0], [26.4, 308.0], [26.5, 308.0], [26.6, 308.0], [26.7, 309.0], [26.8, 309.0], [26.9, 309.0], [27.0, 309.0], [27.1, 310.0], [27.2, 310.0], [27.3, 311.0], [27.4, 311.0], [27.5, 311.0], [27.6, 312.0], [27.7, 312.0], [27.8, 313.0], [27.9, 313.0], [28.0, 313.0], [28.1, 314.0], [28.2, 315.0], [28.3, 315.0], [28.4, 315.0], [28.5, 315.0], [28.6, 315.0], [28.7, 316.0], [28.8, 316.0], [28.9, 317.0], [29.0, 317.0], [29.1, 317.0], [29.2, 318.0], [29.3, 318.0], [29.4, 318.0], [29.5, 318.0], [29.6, 319.0], [29.7, 319.0], [29.8, 319.0], [29.9, 319.0], [30.0, 320.0], [30.1, 320.0], [30.2, 321.0], [30.3, 321.0], [30.4, 321.0], [30.5, 321.0], [30.6, 322.0], [30.7, 322.0], [30.8, 323.0], [30.9, 323.0], [31.0, 324.0], [31.1, 324.0], [31.2, 324.0], [31.3, 324.0], [31.4, 324.0], [31.5, 324.0], [31.6, 324.0], [31.7, 324.0], [31.8, 325.0], [31.9, 325.0], [32.0, 325.0], [32.1, 326.0], [32.2, 326.0], [32.3, 327.0], [32.4, 327.0], [32.5, 327.0], [32.6, 327.0], [32.7, 328.0], [32.8, 328.0], [32.9, 329.0], [33.0, 330.0], [33.1, 330.0], [33.2, 330.0], [33.3, 330.0], [33.4, 330.0], [33.5, 330.0], [33.6, 331.0], [33.7, 331.0], [33.8, 331.0], [33.9, 331.0], [34.0, 331.0], [34.1, 331.0], [34.2, 332.0], [34.3, 332.0], [34.4, 332.0], [34.5, 333.0], [34.6, 333.0], [34.7, 333.0], [34.8, 334.0], [34.9, 334.0], [35.0, 334.0], [35.1, 335.0], [35.2, 335.0], [35.3, 335.0], [35.4, 335.0], [35.5, 336.0], [35.6, 336.0], [35.7, 336.0], [35.8, 337.0], [35.9, 337.0], [36.0, 337.0], [36.1, 337.0], [36.2, 337.0], [36.3, 338.0], [36.4, 338.0], [36.5, 338.0], [36.6, 339.0], [36.7, 339.0], [36.8, 339.0], [36.9, 339.0], [37.0, 340.0], [37.1, 341.0], [37.2, 341.0], [37.3, 341.0], [37.4, 342.0], [37.5, 342.0], [37.6, 343.0], [37.7, 343.0], [37.8, 344.0], [37.9, 344.0], [38.0, 344.0], [38.1, 344.0], [38.2, 344.0], [38.3, 345.0], [38.4, 345.0], [38.5, 345.0], [38.6, 346.0], [38.7, 346.0], [38.8, 346.0], [38.9, 346.0], [39.0, 346.0], [39.1, 347.0], [39.2, 347.0], [39.3, 347.0], [39.4, 347.0], [39.5, 348.0], [39.6, 348.0], [39.7, 349.0], [39.8, 349.0], [39.9, 349.0], [40.0, 350.0], [40.1, 350.0], [40.2, 350.0], [40.3, 351.0], [40.4, 351.0], [40.5, 352.0], [40.6, 352.0], [40.7, 353.0], [40.8, 353.0], [40.9, 353.0], [41.0, 354.0], [41.1, 354.0], [41.2, 354.0], [41.3, 354.0], [41.4, 354.0], [41.5, 355.0], [41.6, 355.0], [41.7, 355.0], [41.8, 355.0], [41.9, 355.0], [42.0, 356.0], [42.1, 356.0], [42.2, 356.0], [42.3, 356.0], [42.4, 357.0], [42.5, 357.0], [42.6, 358.0], [42.7, 358.0], [42.8, 358.0], [42.9, 359.0], [43.0, 359.0], [43.1, 359.0], [43.2, 359.0], [43.3, 360.0], [43.4, 360.0], [43.5, 360.0], [43.6, 360.0], [43.7, 360.0], [43.8, 361.0], [43.9, 361.0], [44.0, 361.0], [44.1, 362.0], [44.2, 362.0], [44.3, 363.0], [44.4, 363.0], [44.5, 363.0], [44.6, 363.0], [44.7, 364.0], [44.8, 364.0], [44.9, 365.0], [45.0, 365.0], [45.1, 365.0], [45.2, 365.0], [45.3, 365.0], [45.4, 365.0], [45.5, 366.0], [45.6, 366.0], [45.7, 366.0], [45.8, 367.0], [45.9, 367.0], [46.0, 367.0], [46.1, 368.0], [46.2, 368.0], [46.3, 368.0], [46.4, 368.0], [46.5, 368.0], [46.6, 368.0], [46.7, 369.0], [46.8, 369.0], [46.9, 369.0], [47.0, 370.0], [47.1, 370.0], [47.2, 370.0], [47.3, 371.0], [47.4, 371.0], [47.5, 371.0], [47.6, 372.0], [47.7, 372.0], [47.8, 372.0], [47.9, 372.0], [48.0, 373.0], [48.1, 373.0], [48.2, 373.0], [48.3, 374.0], [48.4, 374.0], [48.5, 375.0], [48.6, 375.0], [48.7, 376.0], [48.8, 376.0], [48.9, 377.0], [49.0, 377.0], [49.1, 377.0], [49.2, 377.0], [49.3, 378.0], [49.4, 378.0], [49.5, 378.0], [49.6, 378.0], [49.7, 380.0], [49.8, 380.0], [49.9, 380.0], [50.0, 381.0], [50.1, 382.0], [50.2, 382.0], [50.3, 382.0], [50.4, 382.0], [50.5, 383.0], [50.6, 383.0], [50.7, 383.0], [50.8, 383.0], [50.9, 383.0], [51.0, 383.0], [51.1, 383.0], [51.2, 383.0], [51.3, 384.0], [51.4, 384.0], [51.5, 384.0], [51.6, 385.0], [51.7, 385.0], [51.8, 386.0], [51.9, 386.0], [52.0, 387.0], [52.1, 387.0], [52.2, 387.0], [52.3, 388.0], [52.4, 388.0], [52.5, 388.0], [52.6, 389.0], [52.7, 389.0], [52.8, 389.0], [52.9, 389.0], [53.0, 390.0], [53.1, 390.0], [53.2, 390.0], [53.3, 390.0], [53.4, 390.0], [53.5, 390.0], [53.6, 390.0], [53.7, 391.0], [53.8, 391.0], [53.9, 392.0], [54.0, 392.0], [54.1, 392.0], [54.2, 392.0], [54.3, 392.0], [54.4, 393.0], [54.5, 393.0], [54.6, 394.0], [54.7, 394.0], [54.8, 394.0], [54.9, 395.0], [55.0, 395.0], [55.1, 395.0], [55.2, 395.0], [55.3, 395.0], [55.4, 396.0], [55.5, 396.0], [55.6, 396.0], [55.7, 396.0], [55.8, 397.0], [55.9, 397.0], [56.0, 398.0], [56.1, 398.0], [56.2, 398.0], [56.3, 398.0], [56.4, 399.0], [56.5, 399.0], [56.6, 399.0], [56.7, 400.0], [56.8, 400.0], [56.9, 400.0], [57.0, 400.0], [57.1, 401.0], [57.2, 401.0], [57.3, 401.0], [57.4, 402.0], [57.5, 402.0], [57.6, 402.0], [57.7, 402.0], [57.8, 402.0], [57.9, 403.0], [58.0, 403.0], [58.1, 403.0], [58.2, 404.0], [58.3, 404.0], [58.4, 404.0], [58.5, 404.0], [58.6, 404.0], [58.7, 405.0], [58.8, 405.0], [58.9, 405.0], [59.0, 405.0], [59.1, 405.0], [59.2, 405.0], [59.3, 406.0], [59.4, 406.0], [59.5, 406.0], [59.6, 406.0], [59.7, 407.0], [59.8, 407.0], [59.9, 407.0], [60.0, 407.0], [60.1, 408.0], [60.2, 409.0], [60.3, 409.0], [60.4, 409.0], [60.5, 409.0], [60.6, 410.0], [60.7, 410.0], [60.8, 410.0], [60.9, 410.0], [61.0, 411.0], [61.1, 411.0], [61.2, 411.0], [61.3, 412.0], [61.4, 413.0], [61.5, 413.0], [61.6, 413.0], [61.7, 414.0], [61.8, 414.0], [61.9, 414.0], [62.0, 415.0], [62.1, 415.0], [62.2, 415.0], [62.3, 415.0], [62.4, 416.0], [62.5, 416.0], [62.6, 416.0], [62.7, 418.0], [62.8, 418.0], [62.9, 418.0], [63.0, 418.0], [63.1, 419.0], [63.2, 419.0], [63.3, 419.0], [63.4, 420.0], [63.5, 420.0], [63.6, 420.0], [63.7, 420.0], [63.8, 421.0], [63.9, 421.0], [64.0, 421.0], [64.1, 422.0], [64.2, 422.0], [64.3, 422.0], [64.4, 422.0], [64.5, 423.0], [64.6, 423.0], [64.7, 424.0], [64.8, 424.0], [64.9, 424.0], [65.0, 424.0], [65.1, 424.0], [65.2, 424.0], [65.3, 424.0], [65.4, 425.0], [65.5, 426.0], [65.6, 426.0], [65.7, 426.0], [65.8, 426.0], [65.9, 426.0], [66.0, 427.0], [66.1, 427.0], [66.2, 428.0], [66.3, 428.0], [66.4, 428.0], [66.5, 428.0], [66.6, 429.0], [66.7, 429.0], [66.8, 429.0], [66.9, 430.0], [67.0, 430.0], [67.1, 430.0], [67.2, 430.0], [67.3, 430.0], [67.4, 431.0], [67.5, 432.0], [67.6, 432.0], [67.7, 432.0], [67.8, 432.0], [67.9, 432.0], [68.0, 432.0], [68.1, 432.0], [68.2, 433.0], [68.3, 433.0], [68.4, 433.0], [68.5, 433.0], [68.6, 434.0], [68.7, 434.0], [68.8, 434.0], [68.9, 434.0], [69.0, 434.0], [69.1, 434.0], [69.2, 435.0], [69.3, 435.0], [69.4, 435.0], [69.5, 436.0], [69.6, 436.0], [69.7, 436.0], [69.8, 436.0], [69.9, 436.0], [70.0, 437.0], [70.1, 438.0], [70.2, 438.0], [70.3, 438.0], [70.4, 438.0], [70.5, 439.0], [70.6, 439.0], [70.7, 440.0], [70.8, 440.0], [70.9, 440.0], [71.0, 441.0], [71.1, 441.0], [71.2, 441.0], [71.3, 441.0], [71.4, 442.0], [71.5, 442.0], [71.6, 443.0], [71.7, 443.0], [71.8, 443.0], [71.9, 443.0], [72.0, 443.0], [72.1, 444.0], [72.2, 444.0], [72.3, 444.0], [72.4, 444.0], [72.5, 444.0], [72.6, 444.0], [72.7, 444.0], [72.8, 445.0], [72.9, 445.0], [73.0, 445.0], [73.1, 445.0], [73.2, 446.0], [73.3, 446.0], [73.4, 446.0], [73.5, 446.0], [73.6, 446.0], [73.7, 446.0], [73.8, 446.0], [73.9, 447.0], [74.0, 447.0], [74.1, 447.0], [74.2, 448.0], [74.3, 448.0], [74.4, 448.0], [74.5, 449.0], [74.6, 449.0], [74.7, 450.0], [74.8, 450.0], [74.9, 450.0], [75.0, 450.0], [75.1, 452.0], [75.2, 453.0], [75.3, 454.0], [75.4, 454.0], [75.5, 454.0], [75.6, 454.0], [75.7, 455.0], [75.8, 455.0], [75.9, 456.0], [76.0, 456.0], [76.1, 456.0], [76.2, 457.0], [76.3, 457.0], [76.4, 457.0], [76.5, 457.0], [76.6, 458.0], [76.7, 458.0], [76.8, 458.0], [76.9, 458.0], [77.0, 459.0], [77.1, 459.0], [77.2, 459.0], [77.3, 459.0], [77.4, 460.0], [77.5, 460.0], [77.6, 460.0], [77.7, 460.0], [77.8, 460.0], [77.9, 460.0], [78.0, 460.0], [78.1, 460.0], [78.2, 461.0], [78.3, 461.0], [78.4, 461.0], [78.5, 462.0], [78.6, 462.0], [78.7, 462.0], [78.8, 462.0], [78.9, 462.0], [79.0, 462.0], [79.1, 462.0], [79.2, 462.0], [79.3, 462.0], [79.4, 463.0], [79.5, 463.0], [79.6, 464.0], [79.7, 464.0], [79.8, 464.0], [79.9, 464.0], [80.0, 464.0], [80.1, 465.0], [80.2, 465.0], [80.3, 465.0], [80.4, 466.0], [80.5, 466.0], [80.6, 466.0], [80.7, 466.0], [80.8, 467.0], [80.9, 467.0], [81.0, 467.0], [81.1, 467.0], [81.2, 467.0], [81.3, 468.0], [81.4, 468.0], [81.5, 469.0], [81.6, 469.0], [81.7, 469.0], [81.8, 469.0], [81.9, 470.0], [82.0, 470.0], [82.1, 470.0], [82.2, 470.0], [82.3, 470.0], [82.4, 470.0], [82.5, 471.0], [82.6, 471.0], [82.7, 471.0], [82.8, 471.0], [82.9, 471.0], [83.0, 472.0], [83.1, 472.0], [83.2, 472.0], [83.3, 473.0], [83.4, 474.0], [83.5, 474.0], [83.6, 474.0], [83.7, 475.0], [83.8, 475.0], [83.9, 475.0], [84.0, 476.0], [84.1, 476.0], [84.2, 476.0], [84.3, 477.0], [84.4, 478.0], [84.5, 478.0], [84.6, 478.0], [84.7, 478.0], [84.8, 478.0], [84.9, 479.0], [85.0, 479.0], [85.1, 480.0], [85.2, 480.0], [85.3, 480.0], [85.4, 480.0], [85.5, 481.0], [85.6, 481.0], [85.7, 481.0], [85.8, 482.0], [85.9, 483.0], [86.0, 483.0], [86.1, 483.0], [86.2, 483.0], [86.3, 483.0], [86.4, 484.0], [86.5, 484.0], [86.6, 485.0], [86.7, 486.0], [86.8, 486.0], [86.9, 486.0], [87.0, 487.0], [87.1, 487.0], [87.2, 487.0], [87.3, 487.0], [87.4, 488.0], [87.5, 488.0], [87.6, 488.0], [87.7, 489.0], [87.8, 489.0], [87.9, 489.0], [88.0, 489.0], [88.1, 489.0], [88.2, 489.0], [88.3, 490.0], [88.4, 490.0], [88.5, 490.0], [88.6, 491.0], [88.7, 491.0], [88.8, 491.0], [88.9, 492.0], [89.0, 492.0], [89.1, 493.0], [89.2, 493.0], [89.3, 493.0], [89.4, 493.0], [89.5, 493.0], [89.6, 494.0], [89.7, 494.0], [89.8, 494.0], [89.9, 494.0], [90.0, 495.0], [90.1, 495.0], [90.2, 496.0], [90.3, 496.0], [90.4, 496.0], [90.5, 497.0], [90.6, 497.0], [90.7, 498.0], [90.8, 498.0], [90.9, 498.0], [91.0, 498.0], [91.1, 498.0], [91.2, 498.0], [91.3, 499.0], [91.4, 499.0], [91.5, 499.0], [91.6, 500.0], [91.7, 501.0], [91.8, 501.0], [91.9, 501.0], [92.0, 501.0], [92.1, 502.0], [92.2, 503.0], [92.3, 503.0], [92.4, 503.0], [92.5, 504.0], [92.6, 504.0], [92.7, 504.0], [92.8, 505.0], [92.9, 505.0], [93.0, 505.0], [93.1, 506.0], [93.2, 506.0], [93.3, 506.0], [93.4, 506.0], [93.5, 507.0], [93.6, 507.0], [93.7, 507.0], [93.8, 508.0], [93.9, 508.0], [94.0, 509.0], [94.1, 509.0], [94.2, 509.0], [94.3, 509.0], [94.4, 510.0], [94.5, 510.0], [94.6, 511.0], [94.7, 511.0], [94.8, 512.0], [94.9, 512.0], [95.0, 513.0], [95.1, 513.0], [95.2, 514.0], [95.3, 514.0], [95.4, 514.0], [95.5, 515.0], [95.6, 515.0], [95.7, 516.0], [95.8, 516.0], [95.9, 517.0], [96.0, 517.0], [96.1, 517.0], [96.2, 518.0], [96.3, 518.0], [96.4, 518.0], [96.5, 518.0], [96.6, 519.0], [96.7, 519.0], [96.8, 519.0], [96.9, 520.0], [97.0, 520.0], [97.1, 520.0], [97.2, 520.0], [97.3, 520.0], [97.4, 520.0], [97.5, 520.0], [97.6, 521.0], [97.7, 521.0], [97.8, 521.0], [97.9, 522.0], [98.0, 522.0], [98.1, 523.0], [98.2, 523.0], [98.3, 523.0], [98.4, 523.0], [98.5, 523.0], [98.6, 523.0], [98.7, 524.0], [98.8, 524.0], [98.9, 525.0], [99.0, 525.0], [99.1, 525.0], [99.2, 526.0], [99.3, 526.0], [99.4, 528.0], [99.5, 528.0], [99.6, 529.0], [99.7, 537.0], [99.8, 580.0], [99.9, 904.0], [100.0, 915.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 550.0, "series": [{"data": [[300.0, 520.0], [400.0, 550.0], [800.0, 1.0], [200.0, 373.0], [900.0, 2.0], [500.0, 130.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 131.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1445.0, "series": [{"data": [[0.0, 1445.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 131.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.899543378995435, "minX": 1.74320502E12, "maxY": 9.998242530755736, "series": [{"data": [[1.74320508E12, 9.899543378995435], [1.74320502E12, 9.998242530755736]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320508E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 341.0, "minX": 2.0, "maxY": 484.0, "series": [{"data": [[8.0, 341.0], [4.0, 405.0], [2.0, 386.5], [9.0, 423.0], [10.0, 378.40319488817875], [5.0, 444.0], [6.0, 360.0], [3.0, 394.0], [7.0, 484.0]], "isOverall": false, "label": "Google", "isController": false}, {"data": [[9.970812182741131, 378.5983502538067]], "isOverall": false, "label": "Google-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 817.6, "minX": 1.74320502E12, "maxY": 16633.766666666666, "series": [{"data": [[1.74320508E12, 6402.1], [1.74320502E12, 16633.766666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74320508E12, 817.6], [1.74320502E12, 2124.266666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320508E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 375.42465753424693, "minX": 1.74320502E12, "maxY": 379.8198594024606, "series": [{"data": [[1.74320508E12, 375.42465753424693], [1.74320502E12, 379.8198594024606]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320508E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 374.26940639269435, "minX": 1.74320502E12, "maxY": 378.6546572934976, "series": [{"data": [[1.74320508E12, 374.26940639269435], [1.74320502E12, 378.6546572934976]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320508E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 16.292237442922378, "minX": 1.74320502E12, "maxY": 17.8242530755712, "series": [{"data": [[1.74320508E12, 16.292237442922378], [1.74320502E12, 17.8242530755712]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320508E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 224.0, "minX": 1.74320502E12, "maxY": 915.0, "series": [{"data": [[1.74320508E12, 528.0], [1.74320502E12, 915.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74320508E12, 493.1], [1.74320502E12, 496.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74320508E12, 524.61], [1.74320502E12, 526.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74320508E12, 512.05], [1.74320502E12, 514.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74320508E12, 224.0], [1.74320502E12, 225.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74320508E12, 377.0], [1.74320502E12, 382.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320508E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 339.0, "minX": 2.0, "maxY": 483.5, "series": [{"data": [[2.0, 483.5], [23.0, 389.5], [24.0, 400.5], [12.0, 369.0], [25.0, 389.0], [26.0, 371.0], [27.0, 383.0], [28.0, 364.5], [29.0, 383.0], [30.0, 389.0], [31.0, 339.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 338.0, "minX": 2.0, "maxY": 465.5, "series": [{"data": [[2.0, 465.5], [23.0, 389.0], [24.0, 400.0], [12.0, 367.0], [25.0, 387.0], [26.0, 370.0], [27.0, 381.0], [28.0, 363.5], [29.0, 382.0], [30.0, 387.5], [31.0, 338.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.133333333333334, "minX": 1.74320502E12, "maxY": 19.133333333333333, "series": [{"data": [[1.74320508E12, 7.133333333333334], [1.74320502E12, 19.133333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320508E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.3, "minX": 1.74320502E12, "maxY": 18.966666666666665, "series": [{"data": [[1.74320508E12, 7.3], [1.74320502E12, 18.966666666666665]], "isOverall": false, "label": "302", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320508E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.3, "minX": 1.74320502E12, "maxY": 18.966666666666665, "series": [{"data": [[1.74320508E12, 7.3], [1.74320502E12, 18.966666666666665]], "isOverall": false, "label": "Google-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320508E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.3, "minX": 1.74320502E12, "maxY": 18.966666666666665, "series": [{"data": [[1.74320508E12, 7.3], [1.74320502E12, 18.966666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320508E12, "title": "Total Transactions Per Second"}},
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

