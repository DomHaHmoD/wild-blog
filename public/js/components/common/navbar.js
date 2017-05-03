let navbar = {
    templateUrl: 'js/components/common/navbar.html',
    controller: ['UsersService', '$state', function(UsersService, $state) {
        'use strict'
        angular.extend(this, {
            $onInit() {
                UsersService.getCurrent().then((user) => {
                    this.user = user
                }).catch((err) => {

                })
            },
            disconnect() {
                UsersService.disconnect().then(() => {
                    Materialize.toast('Disconnected', 4000, 'toast-warning')
                    this.user = null
                    $state.reload()
                })
            }

            /*
            let time = this.moment();
            this.moment.lang('fr');
            //console.log(now.format('LLLL'));*/

        })
    }]
}

export default navbar
