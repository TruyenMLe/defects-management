(function () {
    'use strict';

    angular.module('app')
        .factory('localDataService', function () {
            return {
                getDefectDetails: getDefectDetails,
                getListOfDefects: getListOfDefects,
                getListOfSearchFields: getListOfSearchFields
            };
        });

    function getDefectDetails(selectedDefect) {
        var defects = getListOfDefects();
        var match;
        for (var i = 0; i < defects.length; i++) {
            if (defects[i].defectNum === selectedDefect) {
                match = defects[i];
                break;
            }
        }

        return match;
    }

    function getListOfDefects() {
        return [{
            defectNum: '1',
            summary: 'Copy defect selection',
            description: 'Copy feature is not able to select specific defect. Need to add checkboxes in defect list.',
            status: 'New',
            severity: '3',
            priority: '2',
            assignedTo: 'Truyen Le',
            dateReported: '12/15/2016'
        }, {
            defectNum: '2',
            summary: 'Choose column lightbox',
            description: 'Add lightbox for selecting column to display on defect list panel',
            status: 'New',
            severity: '5',
            priority: '3',
            assignedTo: 'Truyen Le',
            dateReported: '12/15/2016'
        }, {
            defectNum: '3',
            summary: 'Edit defect page',
            description: 'Add new page for editing selected defect. Get mockup from quality center page',
            status: 'New',
            severity: '5',
            priority: '1',
            assignedTo: 'Truyen Le',
            dateReported: '12/15/2016'
        }, {
            defectNum: '4',
            summary: 'Go to defect popover',
            description: 'Implement popover below go to defect button so user can enter defect number and open defect details page when enter',
            status: 'New',
            severity: '4',
            priority: '3',
            assignedTo: 'Truyen Le',
            dateReported: '12/15/2016'
        }, {
            defectNum: '5',
            summary: 'Refresh button',
            description: 'Get new list of defects with updated data from service',
            status: 'New',
            severity: '4',
            priority: '3',
            assignedTo: 'Truyen Le',
            dateReported: '12/15/2016'
        }, {
            defectNum: '6',
            summary: 'Login page',
            description: 'Redesign login page with new style',
            status: 'New',
            severity: '1',
            priority: '5',
            assignedTo: 'Truyen Le',
            dateReported: '12/15/2016'
        }, {
            defectNum: '7',
            summary: 'Project list is hardcoded',
            description: 'Implement multiple projects selection so user can swith between projects and refresh with new data',
            status: 'New',
            severity: '4',
            priority: '5',
            assignedTo: 'Truyen Le',
            dateReported: '12/15/2016'
        }, {
            defectNum: '8',
            summary: 'Generate defect number automatically',
            description: 'Fix defect number field in add new page to increase automatically for each project. This is needed when copying defect',
            status: 'New',
            severity: '4',
            priority: '5',
            assignedTo: 'Truyen Le',
            dateReported: '12/15/2016'
        }, {
            defectNum: '9',
            summary: 'Delete defect feature',
            description: 'Need to come up with ideas on the structure of deleting the defect through process. It can be a delete button or going to closed status',
            status: 'New',
            severity: '3',
            priority: '4',
            assignedTo: 'Truyen Le',
            dateReported: '12/15/2016'
        }, {
            defectNum: '10',
            summary: 'Change styling to adapt elipse ',
            description: 'Need to come up with ideas on the structure of deleting the defect through process. It can be a delete button or going to closed status',
            status: 'New',
            severity: '3',
            priority: '4',
            assignedTo: 'Truyen Le',
            dateReported: '12/15/2016'
        }];
    }

    function getListOfSearchFields() {
        return [
            { label: 'Assigned To', values: [{ name: 'Truyen Le' }, { name: 'Alex Lovato' }] },
            { label: 'Change Identifier', values: [{ name: '1' }, { name: '2' }, { name: '3' }] },
            { label: 'Date Reported', values: [{ name: '12/01/2016' }, { name: '12/02/2016' }, { name: '12/03/2016' }] },
            { label: 'Priority', values: [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }] },
            { label: 'Reported By', values: [{ name: 'Truyen Le' }, { name: 'Alex Lovato' }] },
            { label: 'Severity', values: [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }] },
            { label: 'Summary', values: [{ name: 'Ideas' }, { name: 'Trust' }, { name: 'Technology' }] }
        ];
    }
})();
