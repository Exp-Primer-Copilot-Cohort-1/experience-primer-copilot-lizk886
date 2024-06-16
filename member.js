function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skillsMember/views/skills-member.client.view.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}
