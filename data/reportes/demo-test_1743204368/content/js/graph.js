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
        data: {"result": {"minY": 223.0, "minX": 0.0, "maxY": 781.0, "series": [{"data": [[0.0, 223.0], [0.1, 225.0], [0.2, 226.0], [0.3, 226.0], [0.4, 227.0], [0.5, 228.0], [0.6, 228.0], [0.7, 228.0], [0.8, 228.0], [0.9, 229.0], [1.0, 230.0], [1.1, 230.0], [1.2, 230.0], [1.3, 231.0], [1.4, 231.0], [1.5, 232.0], [1.6, 233.0], [1.7, 233.0], [1.8, 234.0], [1.9, 234.0], [2.0, 235.0], [2.1, 235.0], [2.2, 235.0], [2.3, 236.0], [2.4, 236.0], [2.5, 236.0], [2.6, 236.0], [2.7, 237.0], [2.8, 237.0], [2.9, 237.0], [3.0, 237.0], [3.1, 238.0], [3.2, 238.0], [3.3, 239.0], [3.4, 240.0], [3.5, 241.0], [3.6, 241.0], [3.7, 242.0], [3.8, 242.0], [3.9, 242.0], [4.0, 242.0], [4.1, 243.0], [4.2, 243.0], [4.3, 244.0], [4.4, 245.0], [4.5, 245.0], [4.6, 245.0], [4.7, 247.0], [4.8, 247.0], [4.9, 247.0], [5.0, 248.0], [5.1, 248.0], [5.2, 248.0], [5.3, 248.0], [5.4, 249.0], [5.5, 249.0], [5.6, 249.0], [5.7, 249.0], [5.8, 250.0], [5.9, 250.0], [6.0, 250.0], [6.1, 251.0], [6.2, 251.0], [6.3, 251.0], [6.4, 252.0], [6.5, 252.0], [6.6, 253.0], [6.7, 253.0], [6.8, 254.0], [6.9, 254.0], [7.0, 255.0], [7.1, 255.0], [7.2, 255.0], [7.3, 255.0], [7.4, 256.0], [7.5, 256.0], [7.6, 256.0], [7.7, 256.0], [7.8, 256.0], [7.9, 257.0], [8.0, 257.0], [8.1, 257.0], [8.2, 258.0], [8.3, 258.0], [8.4, 259.0], [8.5, 259.0], [8.6, 259.0], [8.7, 259.0], [8.8, 259.0], [8.9, 260.0], [9.0, 260.0], [9.1, 261.0], [9.2, 261.0], [9.3, 261.0], [9.4, 261.0], [9.5, 261.0], [9.6, 261.0], [9.7, 261.0], [9.8, 261.0], [9.9, 262.0], [10.0, 262.0], [10.1, 263.0], [10.2, 263.0], [10.3, 263.0], [10.4, 264.0], [10.5, 264.0], [10.6, 265.0], [10.7, 265.0], [10.8, 265.0], [10.9, 265.0], [11.0, 265.0], [11.1, 265.0], [11.2, 265.0], [11.3, 266.0], [11.4, 266.0], [11.5, 266.0], [11.6, 266.0], [11.7, 266.0], [11.8, 267.0], [11.9, 267.0], [12.0, 268.0], [12.1, 268.0], [12.2, 268.0], [12.3, 269.0], [12.4, 269.0], [12.5, 269.0], [12.6, 270.0], [12.7, 270.0], [12.8, 271.0], [12.9, 271.0], [13.0, 271.0], [13.1, 271.0], [13.2, 271.0], [13.3, 272.0], [13.4, 272.0], [13.5, 272.0], [13.6, 273.0], [13.7, 273.0], [13.8, 273.0], [13.9, 274.0], [14.0, 274.0], [14.1, 275.0], [14.2, 275.0], [14.3, 276.0], [14.4, 276.0], [14.5, 276.0], [14.6, 276.0], [14.7, 277.0], [14.8, 278.0], [14.9, 278.0], [15.0, 278.0], [15.1, 279.0], [15.2, 279.0], [15.3, 279.0], [15.4, 279.0], [15.5, 280.0], [15.6, 280.0], [15.7, 280.0], [15.8, 280.0], [15.9, 280.0], [16.0, 280.0], [16.1, 280.0], [16.2, 281.0], [16.3, 281.0], [16.4, 282.0], [16.5, 282.0], [16.6, 283.0], [16.7, 283.0], [16.8, 283.0], [16.9, 284.0], [17.0, 284.0], [17.1, 284.0], [17.2, 285.0], [17.3, 285.0], [17.4, 285.0], [17.5, 286.0], [17.6, 287.0], [17.7, 288.0], [17.8, 288.0], [17.9, 288.0], [18.0, 289.0], [18.1, 289.0], [18.2, 289.0], [18.3, 290.0], [18.4, 290.0], [18.5, 290.0], [18.6, 290.0], [18.7, 290.0], [18.8, 290.0], [18.9, 291.0], [19.0, 291.0], [19.1, 291.0], [19.2, 291.0], [19.3, 291.0], [19.4, 291.0], [19.5, 291.0], [19.6, 292.0], [19.7, 292.0], [19.8, 293.0], [19.9, 293.0], [20.0, 293.0], [20.1, 294.0], [20.2, 294.0], [20.3, 294.0], [20.4, 294.0], [20.5, 295.0], [20.6, 295.0], [20.7, 295.0], [20.8, 295.0], [20.9, 296.0], [21.0, 296.0], [21.1, 296.0], [21.2, 296.0], [21.3, 297.0], [21.4, 298.0], [21.5, 299.0], [21.6, 299.0], [21.7, 299.0], [21.8, 299.0], [21.9, 299.0], [22.0, 300.0], [22.1, 300.0], [22.2, 300.0], [22.3, 301.0], [22.4, 301.0], [22.5, 301.0], [22.6, 301.0], [22.7, 302.0], [22.8, 302.0], [22.9, 302.0], [23.0, 302.0], [23.1, 303.0], [23.2, 303.0], [23.3, 303.0], [23.4, 303.0], [23.5, 303.0], [23.6, 304.0], [23.7, 304.0], [23.8, 305.0], [23.9, 305.0], [24.0, 305.0], [24.1, 305.0], [24.2, 306.0], [24.3, 306.0], [24.4, 306.0], [24.5, 307.0], [24.6, 307.0], [24.7, 307.0], [24.8, 308.0], [24.9, 308.0], [25.0, 308.0], [25.1, 308.0], [25.2, 309.0], [25.3, 309.0], [25.4, 310.0], [25.5, 310.0], [25.6, 310.0], [25.7, 311.0], [25.8, 311.0], [25.9, 311.0], [26.0, 312.0], [26.1, 312.0], [26.2, 313.0], [26.3, 313.0], [26.4, 313.0], [26.5, 313.0], [26.6, 314.0], [26.7, 314.0], [26.8, 314.0], [26.9, 314.0], [27.0, 314.0], [27.1, 314.0], [27.2, 314.0], [27.3, 315.0], [27.4, 315.0], [27.5, 315.0], [27.6, 315.0], [27.7, 316.0], [27.8, 316.0], [27.9, 316.0], [28.0, 317.0], [28.1, 317.0], [28.2, 317.0], [28.3, 318.0], [28.4, 318.0], [28.5, 319.0], [28.6, 319.0], [28.7, 320.0], [28.8, 320.0], [28.9, 320.0], [29.0, 320.0], [29.1, 321.0], [29.2, 321.0], [29.3, 321.0], [29.4, 321.0], [29.5, 322.0], [29.6, 322.0], [29.7, 322.0], [29.8, 323.0], [29.9, 323.0], [30.0, 324.0], [30.1, 324.0], [30.2, 324.0], [30.3, 324.0], [30.4, 325.0], [30.5, 325.0], [30.6, 325.0], [30.7, 325.0], [30.8, 325.0], [30.9, 325.0], [31.0, 325.0], [31.1, 326.0], [31.2, 326.0], [31.3, 326.0], [31.4, 326.0], [31.5, 327.0], [31.6, 327.0], [31.7, 327.0], [31.8, 328.0], [31.9, 328.0], [32.0, 328.0], [32.1, 328.0], [32.2, 328.0], [32.3, 329.0], [32.4, 329.0], [32.5, 329.0], [32.6, 330.0], [32.7, 330.0], [32.8, 330.0], [32.9, 330.0], [33.0, 330.0], [33.1, 331.0], [33.2, 331.0], [33.3, 331.0], [33.4, 332.0], [33.5, 332.0], [33.6, 332.0], [33.7, 332.0], [33.8, 333.0], [33.9, 334.0], [34.0, 334.0], [34.1, 335.0], [34.2, 335.0], [34.3, 336.0], [34.4, 336.0], [34.5, 336.0], [34.6, 336.0], [34.7, 336.0], [34.8, 336.0], [34.9, 337.0], [35.0, 337.0], [35.1, 338.0], [35.2, 338.0], [35.3, 338.0], [35.4, 339.0], [35.5, 339.0], [35.6, 340.0], [35.7, 340.0], [35.8, 340.0], [35.9, 340.0], [36.0, 341.0], [36.1, 341.0], [36.2, 342.0], [36.3, 342.0], [36.4, 342.0], [36.5, 343.0], [36.6, 344.0], [36.7, 344.0], [36.8, 344.0], [36.9, 344.0], [37.0, 344.0], [37.1, 345.0], [37.2, 345.0], [37.3, 346.0], [37.4, 346.0], [37.5, 346.0], [37.6, 346.0], [37.7, 347.0], [37.8, 347.0], [37.9, 347.0], [38.0, 348.0], [38.1, 348.0], [38.2, 348.0], [38.3, 349.0], [38.4, 349.0], [38.5, 349.0], [38.6, 350.0], [38.7, 350.0], [38.8, 350.0], [38.9, 350.0], [39.0, 350.0], [39.1, 351.0], [39.2, 351.0], [39.3, 352.0], [39.4, 352.0], [39.5, 352.0], [39.6, 352.0], [39.7, 353.0], [39.8, 353.0], [39.9, 354.0], [40.0, 354.0], [40.1, 354.0], [40.2, 355.0], [40.3, 355.0], [40.4, 355.0], [40.5, 356.0], [40.6, 356.0], [40.7, 356.0], [40.8, 356.0], [40.9, 357.0], [41.0, 357.0], [41.1, 357.0], [41.2, 357.0], [41.3, 357.0], [41.4, 358.0], [41.5, 359.0], [41.6, 359.0], [41.7, 359.0], [41.8, 360.0], [41.9, 360.0], [42.0, 360.0], [42.1, 360.0], [42.2, 360.0], [42.3, 361.0], [42.4, 361.0], [42.5, 361.0], [42.6, 361.0], [42.7, 362.0], [42.8, 362.0], [42.9, 363.0], [43.0, 363.0], [43.1, 363.0], [43.2, 363.0], [43.3, 363.0], [43.4, 364.0], [43.5, 364.0], [43.6, 364.0], [43.7, 364.0], [43.8, 364.0], [43.9, 365.0], [44.0, 365.0], [44.1, 365.0], [44.2, 365.0], [44.3, 366.0], [44.4, 367.0], [44.5, 367.0], [44.6, 367.0], [44.7, 367.0], [44.8, 368.0], [44.9, 368.0], [45.0, 368.0], [45.1, 369.0], [45.2, 369.0], [45.3, 369.0], [45.4, 369.0], [45.5, 370.0], [45.6, 370.0], [45.7, 370.0], [45.8, 371.0], [45.9, 372.0], [46.0, 372.0], [46.1, 372.0], [46.2, 372.0], [46.3, 372.0], [46.4, 373.0], [46.5, 373.0], [46.6, 374.0], [46.7, 374.0], [46.8, 374.0], [46.9, 375.0], [47.0, 375.0], [47.1, 375.0], [47.2, 375.0], [47.3, 376.0], [47.4, 376.0], [47.5, 376.0], [47.6, 377.0], [47.7, 377.0], [47.8, 377.0], [47.9, 377.0], [48.0, 377.0], [48.1, 378.0], [48.2, 378.0], [48.3, 378.0], [48.4, 379.0], [48.5, 379.0], [48.6, 379.0], [48.7, 379.0], [48.8, 379.0], [48.9, 379.0], [49.0, 379.0], [49.1, 380.0], [49.2, 380.0], [49.3, 381.0], [49.4, 381.0], [49.5, 381.0], [49.6, 382.0], [49.7, 382.0], [49.8, 382.0], [49.9, 383.0], [50.0, 383.0], [50.1, 383.0], [50.2, 383.0], [50.3, 383.0], [50.4, 384.0], [50.5, 384.0], [50.6, 385.0], [50.7, 385.0], [50.8, 385.0], [50.9, 386.0], [51.0, 386.0], [51.1, 386.0], [51.2, 386.0], [51.3, 386.0], [51.4, 387.0], [51.5, 387.0], [51.6, 388.0], [51.7, 388.0], [51.8, 388.0], [51.9, 388.0], [52.0, 389.0], [52.1, 390.0], [52.2, 390.0], [52.3, 390.0], [52.4, 390.0], [52.5, 390.0], [52.6, 390.0], [52.7, 391.0], [52.8, 391.0], [52.9, 391.0], [53.0, 391.0], [53.1, 391.0], [53.2, 392.0], [53.3, 393.0], [53.4, 393.0], [53.5, 393.0], [53.6, 393.0], [53.7, 393.0], [53.8, 393.0], [53.9, 393.0], [54.0, 394.0], [54.1, 394.0], [54.2, 394.0], [54.3, 394.0], [54.4, 394.0], [54.5, 394.0], [54.6, 395.0], [54.7, 395.0], [54.8, 396.0], [54.9, 396.0], [55.0, 396.0], [55.1, 397.0], [55.2, 397.0], [55.3, 398.0], [55.4, 398.0], [55.5, 399.0], [55.6, 399.0], [55.7, 399.0], [55.8, 400.0], [55.9, 400.0], [56.0, 400.0], [56.1, 400.0], [56.2, 400.0], [56.3, 400.0], [56.4, 401.0], [56.5, 401.0], [56.6, 401.0], [56.7, 401.0], [56.8, 402.0], [56.9, 402.0], [57.0, 402.0], [57.1, 403.0], [57.2, 403.0], [57.3, 403.0], [57.4, 404.0], [57.5, 404.0], [57.6, 404.0], [57.7, 404.0], [57.8, 405.0], [57.9, 405.0], [58.0, 406.0], [58.1, 406.0], [58.2, 406.0], [58.3, 406.0], [58.4, 406.0], [58.5, 407.0], [58.6, 407.0], [58.7, 407.0], [58.8, 407.0], [58.9, 407.0], [59.0, 409.0], [59.1, 409.0], [59.2, 410.0], [59.3, 410.0], [59.4, 410.0], [59.5, 410.0], [59.6, 411.0], [59.7, 411.0], [59.8, 412.0], [59.9, 412.0], [60.0, 412.0], [60.1, 413.0], [60.2, 413.0], [60.3, 413.0], [60.4, 413.0], [60.5, 413.0], [60.6, 413.0], [60.7, 414.0], [60.8, 414.0], [60.9, 415.0], [61.0, 415.0], [61.1, 415.0], [61.2, 416.0], [61.3, 416.0], [61.4, 416.0], [61.5, 416.0], [61.6, 416.0], [61.7, 417.0], [61.8, 417.0], [61.9, 417.0], [62.0, 417.0], [62.1, 418.0], [62.2, 418.0], [62.3, 418.0], [62.4, 418.0], [62.5, 418.0], [62.6, 419.0], [62.7, 419.0], [62.8, 419.0], [62.9, 419.0], [63.0, 420.0], [63.1, 421.0], [63.2, 421.0], [63.3, 421.0], [63.4, 421.0], [63.5, 422.0], [63.6, 422.0], [63.7, 423.0], [63.8, 423.0], [63.9, 423.0], [64.0, 423.0], [64.1, 423.0], [64.2, 423.0], [64.3, 424.0], [64.4, 424.0], [64.5, 424.0], [64.6, 425.0], [64.7, 425.0], [64.8, 425.0], [64.9, 426.0], [65.0, 426.0], [65.1, 426.0], [65.2, 426.0], [65.3, 426.0], [65.4, 426.0], [65.5, 427.0], [65.6, 428.0], [65.7, 428.0], [65.8, 429.0], [65.9, 430.0], [66.0, 430.0], [66.1, 430.0], [66.2, 431.0], [66.3, 432.0], [66.4, 432.0], [66.5, 433.0], [66.6, 433.0], [66.7, 433.0], [66.8, 434.0], [66.9, 434.0], [67.0, 434.0], [67.1, 434.0], [67.2, 434.0], [67.3, 435.0], [67.4, 436.0], [67.5, 436.0], [67.6, 436.0], [67.7, 436.0], [67.8, 437.0], [67.9, 437.0], [68.0, 438.0], [68.1, 438.0], [68.2, 439.0], [68.3, 440.0], [68.4, 440.0], [68.5, 440.0], [68.6, 440.0], [68.7, 440.0], [68.8, 440.0], [68.9, 440.0], [69.0, 441.0], [69.1, 441.0], [69.2, 441.0], [69.3, 442.0], [69.4, 442.0], [69.5, 442.0], [69.6, 443.0], [69.7, 443.0], [69.8, 443.0], [69.9, 444.0], [70.0, 444.0], [70.1, 444.0], [70.2, 445.0], [70.3, 445.0], [70.4, 445.0], [70.5, 446.0], [70.6, 446.0], [70.7, 446.0], [70.8, 447.0], [70.9, 447.0], [71.0, 447.0], [71.1, 447.0], [71.2, 447.0], [71.3, 447.0], [71.4, 448.0], [71.5, 449.0], [71.6, 449.0], [71.7, 449.0], [71.8, 449.0], [71.9, 449.0], [72.0, 449.0], [72.1, 450.0], [72.2, 450.0], [72.3, 450.0], [72.4, 451.0], [72.5, 451.0], [72.6, 452.0], [72.7, 452.0], [72.8, 452.0], [72.9, 452.0], [73.0, 452.0], [73.1, 453.0], [73.2, 453.0], [73.3, 453.0], [73.4, 453.0], [73.5, 453.0], [73.6, 453.0], [73.7, 453.0], [73.8, 454.0], [73.9, 454.0], [74.0, 454.0], [74.1, 454.0], [74.2, 455.0], [74.3, 455.0], [74.4, 455.0], [74.5, 455.0], [74.6, 456.0], [74.7, 456.0], [74.8, 456.0], [74.9, 456.0], [75.0, 457.0], [75.1, 457.0], [75.2, 457.0], [75.3, 457.0], [75.4, 457.0], [75.5, 457.0], [75.6, 458.0], [75.7, 458.0], [75.8, 459.0], [75.9, 459.0], [76.0, 460.0], [76.1, 460.0], [76.2, 460.0], [76.3, 461.0], [76.4, 461.0], [76.5, 461.0], [76.6, 463.0], [76.7, 463.0], [76.8, 463.0], [76.9, 463.0], [77.0, 464.0], [77.1, 465.0], [77.2, 465.0], [77.3, 465.0], [77.4, 465.0], [77.5, 465.0], [77.6, 466.0], [77.7, 466.0], [77.8, 466.0], [77.9, 466.0], [78.0, 466.0], [78.1, 467.0], [78.2, 467.0], [78.3, 468.0], [78.4, 468.0], [78.5, 468.0], [78.6, 468.0], [78.7, 469.0], [78.8, 469.0], [78.9, 469.0], [79.0, 469.0], [79.1, 470.0], [79.2, 471.0], [79.3, 471.0], [79.4, 471.0], [79.5, 471.0], [79.6, 471.0], [79.7, 472.0], [79.8, 472.0], [79.9, 472.0], [80.0, 473.0], [80.1, 473.0], [80.2, 473.0], [80.3, 473.0], [80.4, 473.0], [80.5, 474.0], [80.6, 474.0], [80.7, 474.0], [80.8, 474.0], [80.9, 474.0], [81.0, 474.0], [81.1, 474.0], [81.2, 475.0], [81.3, 475.0], [81.4, 475.0], [81.5, 475.0], [81.6, 476.0], [81.7, 476.0], [81.8, 476.0], [81.9, 476.0], [82.0, 476.0], [82.1, 477.0], [82.2, 477.0], [82.3, 477.0], [82.4, 477.0], [82.5, 477.0], [82.6, 478.0], [82.7, 478.0], [82.8, 478.0], [82.9, 478.0], [83.0, 478.0], [83.1, 479.0], [83.2, 479.0], [83.3, 479.0], [83.4, 479.0], [83.5, 480.0], [83.6, 480.0], [83.7, 480.0], [83.8, 480.0], [83.9, 481.0], [84.0, 481.0], [84.1, 481.0], [84.2, 482.0], [84.3, 482.0], [84.4, 482.0], [84.5, 483.0], [84.6, 483.0], [84.7, 484.0], [84.8, 484.0], [84.9, 486.0], [85.0, 486.0], [85.1, 486.0], [85.2, 486.0], [85.3, 486.0], [85.4, 487.0], [85.5, 487.0], [85.6, 487.0], [85.7, 488.0], [85.8, 488.0], [85.9, 489.0], [86.0, 489.0], [86.1, 489.0], [86.2, 490.0], [86.3, 490.0], [86.4, 490.0], [86.5, 491.0], [86.6, 491.0], [86.7, 491.0], [86.8, 491.0], [86.9, 491.0], [87.0, 492.0], [87.1, 492.0], [87.2, 492.0], [87.3, 492.0], [87.4, 493.0], [87.5, 493.0], [87.6, 493.0], [87.7, 493.0], [87.8, 494.0], [87.9, 494.0], [88.0, 494.0], [88.1, 495.0], [88.2, 495.0], [88.3, 495.0], [88.4, 495.0], [88.5, 495.0], [88.6, 496.0], [88.7, 496.0], [88.8, 497.0], [88.9, 497.0], [89.0, 497.0], [89.1, 498.0], [89.2, 499.0], [89.3, 499.0], [89.4, 500.0], [89.5, 500.0], [89.6, 501.0], [89.7, 501.0], [89.8, 501.0], [89.9, 502.0], [90.0, 502.0], [90.1, 502.0], [90.2, 502.0], [90.3, 503.0], [90.4, 503.0], [90.5, 503.0], [90.6, 503.0], [90.7, 503.0], [90.8, 503.0], [90.9, 503.0], [91.0, 504.0], [91.1, 504.0], [91.2, 504.0], [91.3, 504.0], [91.4, 505.0], [91.5, 505.0], [91.6, 505.0], [91.7, 505.0], [91.8, 506.0], [91.9, 506.0], [92.0, 506.0], [92.1, 507.0], [92.2, 507.0], [92.3, 507.0], [92.4, 507.0], [92.5, 507.0], [92.6, 507.0], [92.7, 507.0], [92.8, 507.0], [92.9, 508.0], [93.0, 508.0], [93.1, 508.0], [93.2, 508.0], [93.3, 508.0], [93.4, 509.0], [93.5, 510.0], [93.6, 511.0], [93.7, 511.0], [93.8, 511.0], [93.9, 511.0], [94.0, 512.0], [94.1, 512.0], [94.2, 512.0], [94.3, 513.0], [94.4, 513.0], [94.5, 513.0], [94.6, 513.0], [94.7, 514.0], [94.8, 514.0], [94.9, 514.0], [95.0, 514.0], [95.1, 515.0], [95.2, 515.0], [95.3, 515.0], [95.4, 516.0], [95.5, 516.0], [95.6, 517.0], [95.7, 517.0], [95.8, 517.0], [95.9, 517.0], [96.0, 518.0], [96.1, 518.0], [96.2, 518.0], [96.3, 518.0], [96.4, 518.0], [96.5, 519.0], [96.6, 520.0], [96.7, 520.0], [96.8, 520.0], [96.9, 520.0], [97.0, 520.0], [97.1, 521.0], [97.2, 521.0], [97.3, 521.0], [97.4, 522.0], [97.5, 522.0], [97.6, 522.0], [97.7, 523.0], [97.8, 523.0], [97.9, 523.0], [98.0, 523.0], [98.1, 524.0], [98.2, 524.0], [98.3, 524.0], [98.4, 524.0], [98.5, 524.0], [98.6, 525.0], [98.7, 525.0], [98.8, 525.0], [98.9, 525.0], [99.0, 526.0], [99.1, 526.0], [99.2, 526.0], [99.3, 526.0], [99.4, 527.0], [99.5, 528.0], [99.6, 528.0], [99.7, 530.0], [99.8, 558.0], [99.9, 779.0], [100.0, 781.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 200.0, "maxY": 529.0, "series": [{"data": [[300.0, 529.0], [700.0, 2.0], [400.0, 524.0], [200.0, 342.0], [500.0, 164.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 163.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1398.0, "series": [{"data": [[0.0, 1398.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 163.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.839285714285714, "minX": 1.74320436E12, "maxY": 9.997658079625293, "series": [{"data": [[1.74320442E12, 9.839285714285714], [1.74320436E12, 9.997658079625293]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320442E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 261.0, "minX": 1.0, "maxY": 504.5, "series": [{"data": [[8.0, 467.0], [4.0, 261.0], [2.0, 456.0], [1.0, 486.0], [9.0, 504.5], [10.0, 381.92258064516176], [5.0, 487.0], [6.0, 450.0], [3.0, 467.0], [7.0, 365.0]], "isOverall": false, "label": "Google", "isController": false}, {"data": [[9.969250480461248, 382.3798846893022]], "isOverall": false, "label": "Google-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 522.6666666666666, "minX": 1.74320436E12, "maxY": 18723.95, "series": [{"data": [[1.74320442E12, 4092.6666666666665], [1.74320436E12, 18723.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74320442E12, 522.6666666666666], [1.74320436E12, 2391.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320442E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 381.1342701014837, "minX": 1.74320436E12, "maxY": 388.07857142857154, "series": [{"data": [[1.74320442E12, 388.07857142857154], [1.74320436E12, 381.1342701014837]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320442E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 379.9773614363783, "minX": 1.74320436E12, "maxY": 386.8035714285715, "series": [{"data": [[1.74320442E12, 386.8035714285715], [1.74320436E12, 379.9773614363783]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320442E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 16.328571428571422, "minX": 1.74320436E12, "maxY": 17.639344262295047, "series": [{"data": [[1.74320442E12, 16.328571428571422], [1.74320436E12, 17.639344262295047]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320442E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 223.0, "minX": 1.74320436E12, "maxY": 781.0, "series": [{"data": [[1.74320442E12, 526.0], [1.74320436E12, 781.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74320442E12, 503.0], [1.74320436E12, 501.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74320442E12, 525.19], [1.74320436E12, 526.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74320442E12, 515.0], [1.74320436E12, 514.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74320442E12, 225.0], [1.74320436E12, 223.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74320442E12, 395.5], [1.74320436E12, 379.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320442E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 343.5, "minX": 18.0, "maxY": 446.0, "series": [{"data": [[18.0, 446.0], [23.0, 439.5], [24.0, 399.5], [25.0, 400.5], [26.0, 383.0], [27.0, 370.5], [28.0, 365.0], [29.0, 365.0], [30.0, 343.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 342.5, "minX": 18.0, "maxY": 445.0, "series": [{"data": [[18.0, 445.0], [23.0, 439.0], [24.0, 398.5], [25.0, 400.0], [26.0, 382.5], [27.0, 370.0], [28.0, 363.5], [29.0, 364.0], [30.0, 342.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.5, "minX": 1.74320436E12, "maxY": 21.516666666666666, "series": [{"data": [[1.74320442E12, 4.5], [1.74320436E12, 21.516666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320442E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.666666666666667, "minX": 1.74320436E12, "maxY": 21.35, "series": [{"data": [[1.74320442E12, 4.666666666666667], [1.74320436E12, 21.35]], "isOverall": false, "label": "302", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320442E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.666666666666667, "minX": 1.74320436E12, "maxY": 21.35, "series": [{"data": [[1.74320442E12, 4.666666666666667], [1.74320436E12, 21.35]], "isOverall": false, "label": "Google-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320442E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.666666666666667, "minX": 1.74320436E12, "maxY": 21.35, "series": [{"data": [[1.74320442E12, 4.666666666666667], [1.74320436E12, 21.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320442E12, "title": "Total Transactions Per Second"}},
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

