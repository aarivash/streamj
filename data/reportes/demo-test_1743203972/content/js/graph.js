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
        data: {"result": {"minY": 224.0, "minX": 0.0, "maxY": 856.0, "series": [{"data": [[0.0, 224.0], [0.1, 225.0], [0.2, 226.0], [0.3, 226.0], [0.4, 228.0], [0.5, 228.0], [0.6, 229.0], [0.7, 229.0], [0.8, 229.0], [0.9, 229.0], [1.0, 229.0], [1.1, 230.0], [1.2, 231.0], [1.3, 231.0], [1.4, 231.0], [1.5, 231.0], [1.6, 231.0], [1.7, 231.0], [1.8, 231.0], [1.9, 232.0], [2.0, 232.0], [2.1, 233.0], [2.2, 233.0], [2.3, 233.0], [2.4, 234.0], [2.5, 234.0], [2.6, 234.0], [2.7, 234.0], [2.8, 235.0], [2.9, 235.0], [3.0, 236.0], [3.1, 236.0], [3.2, 237.0], [3.3, 237.0], [3.4, 237.0], [3.5, 237.0], [3.6, 237.0], [3.7, 238.0], [3.8, 238.0], [3.9, 238.0], [4.0, 238.0], [4.1, 239.0], [4.2, 239.0], [4.3, 239.0], [4.4, 239.0], [4.5, 239.0], [4.6, 240.0], [4.7, 240.0], [4.8, 240.0], [4.9, 240.0], [5.0, 240.0], [5.1, 240.0], [5.2, 240.0], [5.3, 241.0], [5.4, 241.0], [5.5, 242.0], [5.6, 242.0], [5.7, 243.0], [5.8, 243.0], [5.9, 244.0], [6.0, 244.0], [6.1, 244.0], [6.2, 244.0], [6.3, 245.0], [6.4, 245.0], [6.5, 245.0], [6.6, 245.0], [6.7, 245.0], [6.8, 246.0], [6.9, 246.0], [7.0, 246.0], [7.1, 246.0], [7.2, 246.0], [7.3, 246.0], [7.4, 247.0], [7.5, 247.0], [7.6, 248.0], [7.7, 249.0], [7.8, 249.0], [7.9, 250.0], [8.0, 250.0], [8.1, 250.0], [8.2, 250.0], [8.3, 250.0], [8.4, 251.0], [8.5, 251.0], [8.6, 252.0], [8.7, 253.0], [8.8, 253.0], [8.9, 253.0], [9.0, 254.0], [9.1, 254.0], [9.2, 254.0], [9.3, 255.0], [9.4, 255.0], [9.5, 256.0], [9.6, 256.0], [9.7, 257.0], [9.8, 257.0], [9.9, 258.0], [10.0, 258.0], [10.1, 258.0], [10.2, 258.0], [10.3, 258.0], [10.4, 259.0], [10.5, 259.0], [10.6, 259.0], [10.7, 260.0], [10.8, 260.0], [10.9, 260.0], [11.0, 261.0], [11.1, 262.0], [11.2, 262.0], [11.3, 262.0], [11.4, 262.0], [11.5, 263.0], [11.6, 263.0], [11.7, 263.0], [11.8, 263.0], [11.9, 263.0], [12.0, 263.0], [12.1, 264.0], [12.2, 264.0], [12.3, 264.0], [12.4, 265.0], [12.5, 265.0], [12.6, 265.0], [12.7, 265.0], [12.8, 265.0], [12.9, 266.0], [13.0, 266.0], [13.1, 266.0], [13.2, 266.0], [13.3, 266.0], [13.4, 266.0], [13.5, 266.0], [13.6, 267.0], [13.7, 267.0], [13.8, 267.0], [13.9, 267.0], [14.0, 267.0], [14.1, 267.0], [14.2, 268.0], [14.3, 268.0], [14.4, 269.0], [14.5, 270.0], [14.6, 271.0], [14.7, 271.0], [14.8, 271.0], [14.9, 271.0], [15.0, 272.0], [15.1, 272.0], [15.2, 272.0], [15.3, 273.0], [15.4, 273.0], [15.5, 274.0], [15.6, 274.0], [15.7, 274.0], [15.8, 275.0], [15.9, 275.0], [16.0, 275.0], [16.1, 276.0], [16.2, 276.0], [16.3, 276.0], [16.4, 276.0], [16.5, 276.0], [16.6, 277.0], [16.7, 277.0], [16.8, 277.0], [16.9, 277.0], [17.0, 278.0], [17.1, 278.0], [17.2, 279.0], [17.3, 279.0], [17.4, 280.0], [17.5, 280.0], [17.6, 280.0], [17.7, 281.0], [17.8, 281.0], [17.9, 281.0], [18.0, 282.0], [18.1, 282.0], [18.2, 282.0], [18.3, 282.0], [18.4, 283.0], [18.5, 283.0], [18.6, 283.0], [18.7, 284.0], [18.8, 284.0], [18.9, 284.0], [19.0, 284.0], [19.1, 285.0], [19.2, 285.0], [19.3, 285.0], [19.4, 285.0], [19.5, 285.0], [19.6, 286.0], [19.7, 287.0], [19.8, 287.0], [19.9, 288.0], [20.0, 288.0], [20.1, 289.0], [20.2, 290.0], [20.3, 290.0], [20.4, 290.0], [20.5, 290.0], [20.6, 290.0], [20.7, 291.0], [20.8, 291.0], [20.9, 291.0], [21.0, 292.0], [21.1, 292.0], [21.2, 292.0], [21.3, 293.0], [21.4, 293.0], [21.5, 293.0], [21.6, 293.0], [21.7, 293.0], [21.8, 293.0], [21.9, 294.0], [22.0, 294.0], [22.1, 294.0], [22.2, 295.0], [22.3, 295.0], [22.4, 295.0], [22.5, 295.0], [22.6, 295.0], [22.7, 295.0], [22.8, 296.0], [22.9, 296.0], [23.0, 297.0], [23.1, 297.0], [23.2, 297.0], [23.3, 297.0], [23.4, 297.0], [23.5, 298.0], [23.6, 299.0], [23.7, 299.0], [23.8, 299.0], [23.9, 299.0], [24.0, 300.0], [24.1, 300.0], [24.2, 300.0], [24.3, 300.0], [24.4, 300.0], [24.5, 300.0], [24.6, 301.0], [24.7, 301.0], [24.8, 301.0], [24.9, 302.0], [25.0, 303.0], [25.1, 303.0], [25.2, 303.0], [25.3, 303.0], [25.4, 303.0], [25.5, 303.0], [25.6, 303.0], [25.7, 303.0], [25.8, 303.0], [25.9, 304.0], [26.0, 304.0], [26.1, 304.0], [26.2, 305.0], [26.3, 305.0], [26.4, 305.0], [26.5, 305.0], [26.6, 305.0], [26.7, 306.0], [26.8, 306.0], [26.9, 306.0], [27.0, 306.0], [27.1, 306.0], [27.2, 307.0], [27.3, 307.0], [27.4, 307.0], [27.5, 307.0], [27.6, 308.0], [27.7, 308.0], [27.8, 308.0], [27.9, 308.0], [28.0, 308.0], [28.1, 309.0], [28.2, 309.0], [28.3, 309.0], [28.4, 309.0], [28.5, 310.0], [28.6, 310.0], [28.7, 310.0], [28.8, 310.0], [28.9, 311.0], [29.0, 311.0], [29.1, 311.0], [29.2, 311.0], [29.3, 311.0], [29.4, 312.0], [29.5, 312.0], [29.6, 312.0], [29.7, 313.0], [29.8, 313.0], [29.9, 314.0], [30.0, 314.0], [30.1, 314.0], [30.2, 314.0], [30.3, 315.0], [30.4, 315.0], [30.5, 315.0], [30.6, 316.0], [30.7, 316.0], [30.8, 317.0], [30.9, 317.0], [31.0, 318.0], [31.1, 318.0], [31.2, 318.0], [31.3, 319.0], [31.4, 319.0], [31.5, 319.0], [31.6, 319.0], [31.7, 320.0], [31.8, 320.0], [31.9, 320.0], [32.0, 321.0], [32.1, 321.0], [32.2, 321.0], [32.3, 321.0], [32.4, 321.0], [32.5, 321.0], [32.6, 322.0], [32.7, 322.0], [32.8, 322.0], [32.9, 322.0], [33.0, 322.0], [33.1, 322.0], [33.2, 322.0], [33.3, 323.0], [33.4, 323.0], [33.5, 323.0], [33.6, 324.0], [33.7, 324.0], [33.8, 324.0], [33.9, 325.0], [34.0, 325.0], [34.1, 325.0], [34.2, 325.0], [34.3, 326.0], [34.4, 326.0], [34.5, 326.0], [34.6, 326.0], [34.7, 327.0], [34.8, 327.0], [34.9, 328.0], [35.0, 328.0], [35.1, 328.0], [35.2, 329.0], [35.3, 329.0], [35.4, 329.0], [35.5, 329.0], [35.6, 329.0], [35.7, 329.0], [35.8, 330.0], [35.9, 330.0], [36.0, 330.0], [36.1, 330.0], [36.2, 331.0], [36.3, 331.0], [36.4, 332.0], [36.5, 332.0], [36.6, 332.0], [36.7, 332.0], [36.8, 332.0], [36.9, 333.0], [37.0, 333.0], [37.1, 333.0], [37.2, 333.0], [37.3, 333.0], [37.4, 334.0], [37.5, 334.0], [37.6, 334.0], [37.7, 335.0], [37.8, 335.0], [37.9, 335.0], [38.0, 335.0], [38.1, 335.0], [38.2, 336.0], [38.3, 336.0], [38.4, 337.0], [38.5, 337.0], [38.6, 337.0], [38.7, 337.0], [38.8, 338.0], [38.9, 338.0], [39.0, 338.0], [39.1, 339.0], [39.2, 339.0], [39.3, 339.0], [39.4, 340.0], [39.5, 340.0], [39.6, 340.0], [39.7, 340.0], [39.8, 341.0], [39.9, 341.0], [40.0, 341.0], [40.1, 341.0], [40.2, 341.0], [40.3, 342.0], [40.4, 342.0], [40.5, 342.0], [40.6, 342.0], [40.7, 342.0], [40.8, 342.0], [40.9, 342.0], [41.0, 343.0], [41.1, 343.0], [41.2, 343.0], [41.3, 344.0], [41.4, 344.0], [41.5, 344.0], [41.6, 345.0], [41.7, 345.0], [41.8, 346.0], [41.9, 346.0], [42.0, 346.0], [42.1, 346.0], [42.2, 347.0], [42.3, 347.0], [42.4, 347.0], [42.5, 347.0], [42.6, 347.0], [42.7, 348.0], [42.8, 348.0], [42.9, 348.0], [43.0, 348.0], [43.1, 348.0], [43.2, 349.0], [43.3, 350.0], [43.4, 350.0], [43.5, 351.0], [43.6, 351.0], [43.7, 352.0], [43.8, 352.0], [43.9, 352.0], [44.0, 353.0], [44.1, 353.0], [44.2, 353.0], [44.3, 353.0], [44.4, 354.0], [44.5, 355.0], [44.6, 355.0], [44.7, 356.0], [44.8, 356.0], [44.9, 356.0], [45.0, 356.0], [45.1, 356.0], [45.2, 357.0], [45.3, 357.0], [45.4, 357.0], [45.5, 358.0], [45.6, 358.0], [45.7, 358.0], [45.8, 358.0], [45.9, 359.0], [46.0, 359.0], [46.1, 359.0], [46.2, 359.0], [46.3, 360.0], [46.4, 361.0], [46.5, 361.0], [46.6, 361.0], [46.7, 362.0], [46.8, 362.0], [46.9, 362.0], [47.0, 363.0], [47.1, 363.0], [47.2, 364.0], [47.3, 364.0], [47.4, 365.0], [47.5, 365.0], [47.6, 365.0], [47.7, 366.0], [47.8, 366.0], [47.9, 366.0], [48.0, 366.0], [48.1, 367.0], [48.2, 367.0], [48.3, 368.0], [48.4, 368.0], [48.5, 369.0], [48.6, 369.0], [48.7, 369.0], [48.8, 369.0], [48.9, 370.0], [49.0, 371.0], [49.1, 371.0], [49.2, 371.0], [49.3, 371.0], [49.4, 372.0], [49.5, 372.0], [49.6, 372.0], [49.7, 373.0], [49.8, 373.0], [49.9, 373.0], [50.0, 374.0], [50.1, 374.0], [50.2, 374.0], [50.3, 375.0], [50.4, 375.0], [50.5, 375.0], [50.6, 375.0], [50.7, 375.0], [50.8, 376.0], [50.9, 376.0], [51.0, 377.0], [51.1, 377.0], [51.2, 377.0], [51.3, 377.0], [51.4, 377.0], [51.5, 378.0], [51.6, 379.0], [51.7, 379.0], [51.8, 380.0], [51.9, 380.0], [52.0, 380.0], [52.1, 380.0], [52.2, 380.0], [52.3, 381.0], [52.4, 381.0], [52.5, 382.0], [52.6, 382.0], [52.7, 383.0], [52.8, 383.0], [52.9, 384.0], [53.0, 384.0], [53.1, 385.0], [53.2, 385.0], [53.3, 385.0], [53.4, 386.0], [53.5, 386.0], [53.6, 386.0], [53.7, 387.0], [53.8, 387.0], [53.9, 387.0], [54.0, 387.0], [54.1, 388.0], [54.2, 388.0], [54.3, 388.0], [54.4, 388.0], [54.5, 389.0], [54.6, 389.0], [54.7, 389.0], [54.8, 389.0], [54.9, 389.0], [55.0, 389.0], [55.1, 389.0], [55.2, 390.0], [55.3, 390.0], [55.4, 390.0], [55.5, 390.0], [55.6, 390.0], [55.7, 390.0], [55.8, 390.0], [55.9, 391.0], [56.0, 391.0], [56.1, 392.0], [56.2, 392.0], [56.3, 392.0], [56.4, 392.0], [56.5, 392.0], [56.6, 393.0], [56.7, 393.0], [56.8, 393.0], [56.9, 394.0], [57.0, 394.0], [57.1, 394.0], [57.2, 395.0], [57.3, 395.0], [57.4, 395.0], [57.5, 395.0], [57.6, 395.0], [57.7, 396.0], [57.8, 396.0], [57.9, 396.0], [58.0, 397.0], [58.1, 397.0], [58.2, 397.0], [58.3, 397.0], [58.4, 398.0], [58.5, 398.0], [58.6, 398.0], [58.7, 398.0], [58.8, 398.0], [58.9, 398.0], [59.0, 399.0], [59.1, 399.0], [59.2, 400.0], [59.3, 400.0], [59.4, 400.0], [59.5, 400.0], [59.6, 401.0], [59.7, 401.0], [59.8, 401.0], [59.9, 401.0], [60.0, 402.0], [60.1, 402.0], [60.2, 403.0], [60.3, 403.0], [60.4, 403.0], [60.5, 404.0], [60.6, 404.0], [60.7, 404.0], [60.8, 404.0], [60.9, 405.0], [61.0, 405.0], [61.1, 405.0], [61.2, 405.0], [61.3, 406.0], [61.4, 406.0], [61.5, 406.0], [61.6, 407.0], [61.7, 407.0], [61.8, 407.0], [61.9, 407.0], [62.0, 408.0], [62.1, 408.0], [62.2, 408.0], [62.3, 409.0], [62.4, 409.0], [62.5, 409.0], [62.6, 410.0], [62.7, 410.0], [62.8, 410.0], [62.9, 411.0], [63.0, 411.0], [63.1, 411.0], [63.2, 411.0], [63.3, 412.0], [63.4, 413.0], [63.5, 413.0], [63.6, 413.0], [63.7, 413.0], [63.8, 413.0], [63.9, 413.0], [64.0, 413.0], [64.1, 414.0], [64.2, 415.0], [64.3, 415.0], [64.4, 415.0], [64.5, 416.0], [64.6, 416.0], [64.7, 416.0], [64.8, 416.0], [64.9, 417.0], [65.0, 417.0], [65.1, 417.0], [65.2, 418.0], [65.3, 418.0], [65.4, 419.0], [65.5, 420.0], [65.6, 420.0], [65.7, 420.0], [65.8, 421.0], [65.9, 421.0], [66.0, 422.0], [66.1, 422.0], [66.2, 422.0], [66.3, 423.0], [66.4, 423.0], [66.5, 423.0], [66.6, 423.0], [66.7, 423.0], [66.8, 424.0], [66.9, 424.0], [67.0, 425.0], [67.1, 425.0], [67.2, 425.0], [67.3, 425.0], [67.4, 425.0], [67.5, 426.0], [67.6, 426.0], [67.7, 426.0], [67.8, 427.0], [67.9, 427.0], [68.0, 427.0], [68.1, 428.0], [68.2, 428.0], [68.3, 428.0], [68.4, 428.0], [68.5, 429.0], [68.6, 429.0], [68.7, 429.0], [68.8, 430.0], [68.9, 430.0], [69.0, 430.0], [69.1, 430.0], [69.2, 431.0], [69.3, 431.0], [69.4, 432.0], [69.5, 432.0], [69.6, 433.0], [69.7, 433.0], [69.8, 433.0], [69.9, 433.0], [70.0, 434.0], [70.1, 434.0], [70.2, 434.0], [70.3, 434.0], [70.4, 434.0], [70.5, 435.0], [70.6, 435.0], [70.7, 436.0], [70.8, 437.0], [70.9, 437.0], [71.0, 437.0], [71.1, 438.0], [71.2, 438.0], [71.3, 439.0], [71.4, 439.0], [71.5, 439.0], [71.6, 440.0], [71.7, 440.0], [71.8, 440.0], [71.9, 440.0], [72.0, 441.0], [72.1, 441.0], [72.2, 441.0], [72.3, 441.0], [72.4, 441.0], [72.5, 442.0], [72.6, 442.0], [72.7, 442.0], [72.8, 442.0], [72.9, 443.0], [73.0, 443.0], [73.1, 443.0], [73.2, 444.0], [73.3, 444.0], [73.4, 445.0], [73.5, 445.0], [73.6, 446.0], [73.7, 446.0], [73.8, 447.0], [73.9, 448.0], [74.0, 448.0], [74.1, 448.0], [74.2, 449.0], [74.3, 449.0], [74.4, 449.0], [74.5, 449.0], [74.6, 450.0], [74.7, 450.0], [74.8, 451.0], [74.9, 452.0], [75.0, 452.0], [75.1, 452.0], [75.2, 452.0], [75.3, 453.0], [75.4, 454.0], [75.5, 454.0], [75.6, 454.0], [75.7, 454.0], [75.8, 455.0], [75.9, 455.0], [76.0, 455.0], [76.1, 455.0], [76.2, 455.0], [76.3, 456.0], [76.4, 457.0], [76.5, 457.0], [76.6, 458.0], [76.7, 458.0], [76.8, 458.0], [76.9, 458.0], [77.0, 458.0], [77.1, 459.0], [77.2, 459.0], [77.3, 460.0], [77.4, 460.0], [77.5, 461.0], [77.6, 462.0], [77.7, 462.0], [77.8, 462.0], [77.9, 462.0], [78.0, 463.0], [78.1, 463.0], [78.2, 463.0], [78.3, 464.0], [78.4, 464.0], [78.5, 464.0], [78.6, 464.0], [78.7, 464.0], [78.8, 465.0], [78.9, 465.0], [79.0, 465.0], [79.1, 465.0], [79.2, 466.0], [79.3, 466.0], [79.4, 466.0], [79.5, 467.0], [79.6, 467.0], [79.7, 467.0], [79.8, 469.0], [79.9, 469.0], [80.0, 469.0], [80.1, 469.0], [80.2, 470.0], [80.3, 470.0], [80.4, 470.0], [80.5, 471.0], [80.6, 471.0], [80.7, 471.0], [80.8, 471.0], [80.9, 471.0], [81.0, 472.0], [81.1, 472.0], [81.2, 472.0], [81.3, 472.0], [81.4, 472.0], [81.5, 473.0], [81.6, 473.0], [81.7, 473.0], [81.8, 473.0], [81.9, 473.0], [82.0, 473.0], [82.1, 473.0], [82.2, 474.0], [82.3, 474.0], [82.4, 474.0], [82.5, 474.0], [82.6, 475.0], [82.7, 475.0], [82.8, 475.0], [82.9, 476.0], [83.0, 476.0], [83.1, 476.0], [83.2, 477.0], [83.3, 478.0], [83.4, 478.0], [83.5, 478.0], [83.6, 478.0], [83.7, 479.0], [83.8, 479.0], [83.9, 479.0], [84.0, 479.0], [84.1, 479.0], [84.2, 479.0], [84.3, 480.0], [84.4, 480.0], [84.5, 480.0], [84.6, 481.0], [84.7, 481.0], [84.8, 481.0], [84.9, 481.0], [85.0, 481.0], [85.1, 481.0], [85.2, 482.0], [85.3, 482.0], [85.4, 482.0], [85.5, 482.0], [85.6, 483.0], [85.7, 483.0], [85.8, 483.0], [85.9, 483.0], [86.0, 484.0], [86.1, 484.0], [86.2, 484.0], [86.3, 485.0], [86.4, 485.0], [86.5, 486.0], [86.6, 486.0], [86.7, 486.0], [86.8, 487.0], [86.9, 487.0], [87.0, 488.0], [87.1, 488.0], [87.2, 488.0], [87.3, 488.0], [87.4, 489.0], [87.5, 489.0], [87.6, 489.0], [87.7, 489.0], [87.8, 490.0], [87.9, 490.0], [88.0, 491.0], [88.1, 491.0], [88.2, 491.0], [88.3, 491.0], [88.4, 492.0], [88.5, 492.0], [88.6, 492.0], [88.7, 492.0], [88.8, 492.0], [88.9, 493.0], [89.0, 493.0], [89.1, 493.0], [89.2, 493.0], [89.3, 493.0], [89.4, 494.0], [89.5, 494.0], [89.6, 494.0], [89.7, 494.0], [89.8, 494.0], [89.9, 495.0], [90.0, 495.0], [90.1, 495.0], [90.2, 495.0], [90.3, 496.0], [90.4, 496.0], [90.5, 496.0], [90.6, 497.0], [90.7, 497.0], [90.8, 497.0], [90.9, 498.0], [91.0, 498.0], [91.1, 498.0], [91.2, 498.0], [91.3, 498.0], [91.4, 499.0], [91.5, 499.0], [91.6, 500.0], [91.7, 500.0], [91.8, 500.0], [91.9, 501.0], [92.0, 501.0], [92.1, 501.0], [92.2, 502.0], [92.3, 502.0], [92.4, 502.0], [92.5, 502.0], [92.6, 503.0], [92.7, 503.0], [92.8, 504.0], [92.9, 505.0], [93.0, 505.0], [93.1, 505.0], [93.2, 506.0], [93.3, 506.0], [93.4, 507.0], [93.5, 507.0], [93.6, 507.0], [93.7, 508.0], [93.8, 508.0], [93.9, 508.0], [94.0, 508.0], [94.1, 509.0], [94.2, 509.0], [94.3, 510.0], [94.4, 510.0], [94.5, 511.0], [94.6, 511.0], [94.7, 511.0], [94.8, 511.0], [94.9, 511.0], [95.0, 512.0], [95.1, 512.0], [95.2, 513.0], [95.3, 514.0], [95.4, 514.0], [95.5, 514.0], [95.6, 514.0], [95.7, 515.0], [95.8, 515.0], [95.9, 515.0], [96.0, 516.0], [96.1, 516.0], [96.2, 516.0], [96.3, 516.0], [96.4, 517.0], [96.5, 517.0], [96.6, 517.0], [96.7, 518.0], [96.8, 519.0], [96.9, 519.0], [97.0, 519.0], [97.1, 519.0], [97.2, 520.0], [97.3, 520.0], [97.4, 520.0], [97.5, 520.0], [97.6, 521.0], [97.7, 521.0], [97.8, 521.0], [97.9, 521.0], [98.0, 522.0], [98.1, 522.0], [98.2, 522.0], [98.3, 522.0], [98.4, 523.0], [98.5, 523.0], [98.6, 523.0], [98.7, 523.0], [98.8, 524.0], [98.9, 525.0], [99.0, 525.0], [99.1, 525.0], [99.2, 526.0], [99.3, 526.0], [99.4, 527.0], [99.5, 527.0], [99.6, 529.0], [99.7, 534.0], [99.8, 535.0], [99.9, 777.0], [100.0, 856.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 560.0, "series": [{"data": [[300.0, 560.0], [600.0, 1.0], [700.0, 1.0], [400.0, 515.0], [200.0, 380.0], [800.0, 1.0], [500.0, 131.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 130.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1459.0, "series": [{"data": [[0.0, 1459.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 130.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.950926935659757, "minX": 1.74320394E12, "maxY": 9.991071428571415, "series": [{"data": [[1.74320394E12, 9.991071428571415], [1.743204E12, 9.950926935659757]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.743204E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 225.0, "minX": 1.0, "maxY": 489.0, "series": [{"data": [[8.0, 237.0], [4.0, 225.0], [2.0, 431.0], [1.0, 472.0], [9.0, 474.57142857142856], [10.0, 375.12198221092785], [5.0, 271.0], [6.0, 350.0], [3.0, 489.0], [7.0, 296.0]], "isOverall": false, "label": "Google", "isController": false}, {"data": [[9.967904342353686, 375.4153555695413]], "isOverall": false, "label": "Google-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1254.4, "minX": 1.74320394E12, "maxY": 13403.483333333334, "series": [{"data": [[1.74320394E12, 9822.4], [1.743204E12, 13403.483333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74320394E12, 1254.4], [1.743204E12, 1711.7333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.743204E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 374.5725190839689, "minX": 1.74320394E12, "maxY": 376.565476190476, "series": [{"data": [[1.74320394E12, 376.565476190476], [1.743204E12, 374.5725190839689]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.743204E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 373.4503816793892, "minX": 1.74320394E12, "maxY": 375.36309523809507, "series": [{"data": [[1.74320394E12, 375.36309523809507], [1.743204E12, 373.4503816793892]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.743204E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 16.217011995637943, "minX": 1.74320394E12, "maxY": 18.550595238095227, "series": [{"data": [[1.74320394E12, 18.550595238095227], [1.743204E12, 16.217011995637943]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.743204E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 224.0, "minX": 1.74320394E12, "maxY": 856.0, "series": [{"data": [[1.74320394E12, 856.0], [1.743204E12, 534.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74320394E12, 501.70000000000005], [1.743204E12, 491.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74320394E12, 525.27], [1.743204E12, 525.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74320394E12, 514.35], [1.743204E12, 508.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74320394E12, 224.0], [1.743204E12, 225.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74320394E12, 375.0], [1.743204E12, 373.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.743204E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 296.0, "minX": 7.0, "maxY": 521.0, "series": [{"data": [[9.0, 296.0], [22.0, 411.5], [23.0, 392.0], [24.0, 401.5], [25.0, 382.0], [26.0, 384.5], [27.0, 371.0], [7.0, 521.0], [28.0, 362.5], [29.0, 341.5], [30.0, 367.0], [31.0, 358.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 295.0, "minX": 7.0, "maxY": 504.0, "series": [{"data": [[9.0, 295.0], [22.0, 411.0], [23.0, 390.5], [24.0, 400.5], [25.0, 381.0], [26.0, 383.5], [27.0, 371.0], [7.0, 504.0], [28.0, 361.0], [29.0, 340.5], [30.0, 364.5], [31.0, 357.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.366666666666667, "minX": 1.74320394E12, "maxY": 15.116666666666667, "series": [{"data": [[1.74320394E12, 11.366666666666667], [1.743204E12, 15.116666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.743204E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.2, "minX": 1.74320394E12, "maxY": 15.283333333333333, "series": [{"data": [[1.74320394E12, 11.2], [1.743204E12, 15.283333333333333]], "isOverall": false, "label": "302", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.743204E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.2, "minX": 1.74320394E12, "maxY": 15.283333333333333, "series": [{"data": [[1.74320394E12, 11.2], [1.743204E12, 15.283333333333333]], "isOverall": false, "label": "Google-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.743204E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.2, "minX": 1.74320394E12, "maxY": 15.283333333333333, "series": [{"data": [[1.74320394E12, 11.2], [1.743204E12, 15.283333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.743204E12, "title": "Total Transactions Per Second"}},
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

