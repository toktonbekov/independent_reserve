import { Dialog, InvestDialog } from '#components'
import type { UseModalOptions } from 'vue-final-modal'
import { useModal } from 'vue-final-modal'

type InvestDialogOptions = UseModalOptions<typeof InvestDialog>

export const useInvestDialog = (options: InvestDialogOptions) =>
  useModal({
    component: InvestDialog,
    ...options,
  })
