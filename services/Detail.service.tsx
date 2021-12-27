import { BASE_SERVICE_URL } from '../config';

export default class DetailInfoService {
  constructor() { }

  public async fetchDetails(pk: string) {
    const body = {
      dataObjectPlugins: ['saveUiHistory'],
      moduleName: 'sales',
      acquireLock: false,
      requestModel: {
        attributes: [
          'ClaimStatus',
          'errorCount',
          'fatalCount',
          'totalCount',
          'submissionCount',
          'Payee.MemberName',
          'Payee.GroupFullname',
          'PayeeAddress',
          'ClaimNum',
          'LineCount',
          'TotalDistrRebateAmount',
          'TotalApprRebateAmount',
          'TotalDiscrepancyAmount',
          'DiscrepancyPercentage',
          'PaymentMethod',
          'PaymentDocId',
          'PaymentRequestedDate',
          'PaidDate',
          'PaymentAmount',
          'Currency',
          'ReversalDate',
          'ReversalId',
          'ReversalAmount',
          'Owner.MemberName',
          'DebitMemoId',
          'DateCreated',
          'DateUpdated',
          'OrgUnit.DisplayName',
          'PublishFlag',
          'PurgeImpacted',
          'IsSubmissionStatusPendingClose',
        ],
        relsOneToOne: [
          {
            attributes: ['RefId', 'ChargebackClaimId'],
            relName: 'SalesSubmission',
            relsOneToOne: [{ attributes: ['ClaimNum'], relName: 'ChargebackClaim' }],
            objectType: 'SalesSubmission',
          },
          { attributes: ['PrintableName'], relName: 'MemberUpdated' },
          { attributes: ['PrintableName'], relName: 'MemberCreated' },
          { attributes: ['PrintableName'], relName: 'AdjustedBy' },
        ],
        relsOneToN: [
          {
            attributes: [
              'CreatedBy',
              'Comments',
              'DateCreated',
              'CommentType',
              'DateUpdated',
              'MemberName',
              'MgrId',
              'CommentPk',
              'CollabId',
              'TaskIdNum',
              'LineRefNum',
              'collaborator',
            ],
            relName: 'SaleLineComment',
          },
          {
            attributes: ['DocName', 'DocLength', 'DocDescription', 'DateCreated'],
            relName: 'DocStore',
          },
          {
            attributes: [
              'status',
              'validCount',
              'errorCount',
              'fatalCount',
              'warningCount',
              'totalCount',
              'submissionCount',
              'acceptLinesCount',
              'rejectedLinesCount',
            ],
            relName: 'FetchLineStat',
          },
          {
            attributes: ['Comment', 'DateCreated', 'CommentType'],
            relName: 'ClaimComment',
            relsOneToOne: [
              { attributes: ['PrintableName', 'MemberName'], relName: 'MemberCreated' },
            ],
          },
        ],
      },
    };
    return fetch(BASE_SERVICE_URL + `/rest/data/DistRebatesClaim/${pk}`, {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    }).then((response: any) => {
      return response.json();
    });
  }

  public async logout() { }
}
