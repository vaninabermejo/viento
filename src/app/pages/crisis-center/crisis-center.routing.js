"use strict";
var router_1 = require('@angular/router');
var crisis_center_component_1 = require('./crisis-center.component');
var crisis_detail_component_1 = require('./crisis-detail.component');
var crisis_list_component_1 = require('./crisis-list.component');
var crisis_admin_component_1 = require('./crisis-admin.component');
var can_deactivate_guard_service_1 = require('../services/can-deactivate-guard.service');
var auth_guard_service_1 = require('../services/auth-guard.service');
var crisis_detail_resolve_service_1 = require('../services/crisis-detail-resolve.service');
var crisisCenterRoutes = [
    {
        path: '',
        component: crisis_center_component_1.CrisisCenterComponent,
        children: [
            {
                path: 'admin',
                component: crisis_admin_component_1.CrisisAdminComponent,
                canActivate: [auth_guard_service_1.AuthGuard]
            },
            {
                path: ':id',
                component: crisis_detail_component_1.CrisisDetailComponent,
                canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard],
                resolve: {
                    crisis: crisis_detail_resolve_service_1.CrisisDetailResolve
                }
            },
            {
                path: '',
                component: crisis_list_component_1.CrisisListComponent
            }
        ]
    }
];
exports.crisisCenterRouting = router_1.RouterModule.forChild(crisisCenterRoutes);
//# sourceMappingURL=crisis-center.routing.js.map