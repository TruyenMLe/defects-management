(function () {
    'use strict';

    angular.module('app')
        .factory('localDataService', function () {
            return {
                getDefectDetails: getDefectDetails,
                getListOfDefects: getListOfDefects,
                getListOfSearchFields: getListOfSearchFields,
                getListOfUsers: getListOfUsers
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
            summary: 'Change styling to adapt elipsis',
            description: 'Add ellipsis to summary and description to hide long text',
            status: 'New',
            severity: '3',
            priority: '4',
            assignedTo: 'Truyen Le',
            dateReported: '12/15/2016'
        }, {
            defectNum: '11',
            summary: 'Unit tests',
            description: 'Add unit tests for maintaining code base using Karma and Jasmine',
            status: 'New',
            severity: '3',
            priority: '1',
            assignedTo: 'Truyen Le',
            dateReported: '12/22/2016'
        }, {
            defectNum: '12',
            summary: 'End to end tests',
            description: 'Add end to end tests for checking user behavior on design using Protractor',
            status: 'New',
            severity: '2',
            priority: '5',
            assignedTo: 'Truyen Le',
            dateReported: '12/22/2016'
        }, {
            defectNum: '13',
            summary: 'Defect history',
            description: 'List all histories related to defect with modifier in edit mode',
            status: 'New',
            severity: '3',
            priority: '5',
            assignedTo: 'Truyen Le',
            dateReported: '12/22/2016'
        }, {
            defectNum: '14',
            summary: 'Pagination',
            description: 'Add pagination on top and bottom of defect list',
            status: 'New',
            severity: '2',
            priority: '4',
            assignedTo: 'Truyen Le',
            dateReported: '12/22/2016'
        }, {
            defectNum: '15',
            summary: 'Sorting',
            description: 'Add sorting on each label to sort based on each requirements',
            status: 'New',
            severity: '1',
            priority: '5',
            assignedTo: 'Truyen Le',
            dateReported: '12/22/2016'
        }, {
            defectNum: '16',
            summary: 'Saving status',
            description: 'Fix saving feature in edit mode to reflect new changes on list mode',
            status: 'New',
            severity: '1',
            priority: '3',
            assignedTo: 'Truyen Le',
            dateReported: '12/22/2016'
        }, {
            defectNum: '17',
            summary: 'Database integration',
            description: 'Move all data to database using MongoDB instead of local data.',
            status: 'New',
            severity: '1',
            priority: '2',
            assignedTo: 'Truyen Le',
            dateReported: '12/22/2016'
        }, {
            defectNum: '18',
            summary: 'Scrolling on defect list',
            description: 'Need to figure out why scrolling is not shown on list mode.',
            status: 'New',
            severity: '1',
            priority: '5',
            assignedTo: 'Truyen Le',
            dateReported: '12/22/2016'
        }, {
            defectNum: '19',
            summary: 'Table Rendering',
            description: 'Change list mode to use div elems instead of table cells',
            status: 'New',
            severity: '3',
            priority: '5',
            assignedTo: 'Truyen Le',
            dateReported: '12/22/2016'
        }, {
            defectNum: '20',
            summary: 'Help Button',
            description: 'Need to add help button with instruction on how to use the app',
            status: 'New',
            severity: '5',
            priority: '5',
            assignedTo: 'Truyen Le',
            dateReported: '12/22/2016'
        }, {
            defectNum: '21',
            summary: 'Automate Build Process',
            description: 'Integrate jenkins with github services to automatically build project when changes is pushed',
            status: 'New',
            severity: '2',
            priority: '5',
            assignedTo: 'Truyen Le',
            dateReported: '12/27/2016'
        }, {
            defectNum: '22',
            summary: 'Add more pictures',
            description: 'Add more pictures to make the app look colorful',
            status: 'New',
            severity: '5',
            priority: '5',
            assignedTo: 'Truyen Le',
            dateReported: '12/27/2016'
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
            {
                label: 'Status',
                values: [
                    { name: 'Closed' }, { name: 'Fixed' }, { name: 'In Progress' }, { name: 'New' }, { name: 'Open' },
                    { name: 'Ready for SQA' }, { name: 'Ready for Functional Testing' }, { name: 'Ready for PROD' },
                    { name: 'Ready for QUAL' }, { name: 'Reopen' }, { name: 'Retest failed' }
                ]
            },
            { label: 'Summary', values: [{ name: 'Ideas' }, { name: 'Trust' }, { name: 'Technology' }] }
        ];
    }

    function getListOfUsers() {
        return [
            { id: '10932', firstName: 'Alex', lastName: 'Lovato', fullName: 'Alex Lovato', shortHand: 'alovato' },
            { id: '10933', firstName: 'Truyen', lastName: 'Le', fullName: 'Truyen Le', shortHand: 'trle' },
            { id: '10934', firstName: 'Dave', lastName: 'Laursen', fullName: 'Dave Laursen', shortHand: 'dlaursen' }
        ];
    }
})();
