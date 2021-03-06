// tslint:disable
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * DataVolumeSourcePVC provides the parameters to create a Data Volume from an existing PVC
 * @export
 * @interface V1alpha1DataVolumeSourcePVC
 */
export interface V1alpha1DataVolumeSourcePVC {
  /**
   *
   * @type {string}
   * @memberof V1alpha1DataVolumeSourcePVC
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof V1alpha1DataVolumeSourcePVC
   */
  namespace?: string;
}
