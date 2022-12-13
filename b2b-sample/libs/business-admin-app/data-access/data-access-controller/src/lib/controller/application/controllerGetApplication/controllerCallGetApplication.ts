/**
 * Copyright (c) 2022, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Application } from "@b2bsample/business-admin-app/data-access/data-access-common-models-util";
import { commonControllerCall } from "@b2bsample/shared/data-access/data-access-common-api-util";
import { Session } from "next-auth";

/**
 * call GET `getManagementAPIServerBaseUrl()/o/<subOrgId>/api/server/v1/applications/<id>` to get the applicaion details
 * 
 * @param session - Session object
 * @param id - application id
 * 
 * @returns applicaiton details, if the call failed `null`
 */
export async function controllerCallGetApplication(session: Session, id: string)
    : Promise<Application | null> {

    const data = (
        await commonControllerCall(`/api/settings/application/getApplication/${id}`, session, id) as
        Application | null);

    return data;
}
