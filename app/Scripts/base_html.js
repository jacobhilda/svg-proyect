$(document).ready(function () {
    $('#bximglogo').css({ width: 100 + '%', top: 0 + '%', position: 'absolute' });
    positionMuestra(18, 30, 43, 40);
    function positionMuestra(param1, param2, param3, param4) {
        $('#boxlimit').css({ top: param1 + '%', left: param2 + '%', width: param3 + '%', height: param4 + '%', border: 'none' });
    }
});