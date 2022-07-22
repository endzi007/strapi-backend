'use strict';

/**
 *  home-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::home-page.home-page');
/* module.exports = createCoreController('api::home-page.home-page', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;
        console.log(ctx, "query");

        const entity = await strapi.entityService.findMany('api::home-page.home-page', {
            ...query,
            populate: {
                content: {
                    populate: {
                        hero_section: {
                            populate: {
                                cover_image: {
                                    id: true
                                }
                            }
                        },
                    }
                }
            },
        });
        //let entity = await strapi.entityService.findMany('api::home-page.home-page', { ...query });
        console.log(entity);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
})); */